"use client"

import { useState } from "react"
import { Upload, FolderPlus, FileUp } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type UploadDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onUpload: (name: string, type: "file" | "folder") => void
}

export function UploadDialog({ open, onOpenChange, onUpload }: UploadDialogProps) {
  const [uploadType, setUploadType] = useState<"file" | "folder" | null>(null)
  const [name, setName] = useState("")

  const handleUpload = () => {
    if (name && uploadType) {
      onUpload(name, uploadType)
      setName("")
      setUploadType(null)
      onOpenChange(false)
    }
  }

  const handleCancel = () => {
    setName("")
    setUploadType(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Upload Content</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Choose what you want to upload to your drive
          </DialogDescription>
        </DialogHeader>

        {!uploadType ? (
          <div className="grid gap-4 py-4">
            <button
              onClick={() => setUploadType("file")}
              className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-foreground">Upload File</h3>
                <p className="text-sm text-muted-foreground">Add a new file to your drive</p>
              </div>
            </button>

            <button
              onClick={() => setUploadType("folder")}
              className="flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4 transition-all hover:border-primary/50 hover:bg-secondary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FolderPlus className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-foreground">Create Folder</h3>
                <p className="text-sm text-muted-foreground">Organize your files in a new folder</p>
              </div>
            </button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                {uploadType === "file" ? "File Name" : "Folder Name"}
              </Label>
              <Input
                id="name"
                placeholder={uploadType === "file" ? "Enter file name..." : "Enter folder name..."}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary/50 border-border/50"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleUpload} disabled={!name} className="flex-1 bg-primary hover:bg-primary/90">
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1 bg-transparent">
                Cancel
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
