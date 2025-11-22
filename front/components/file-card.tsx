"use client"

import { Folder, FileText, MoreVertical } from "lucide-react"
import type { FileItem } from "./file-manager"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type FileCardProps = {
  file: FileItem
}

export function FileCard({ file }: FileCardProps) {
  const isFolder = file.type === "folder"

  return (
    <div className="group relative rounded-lg border border-border bg-card/50 backdrop-blur-sm p-4 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
      <div className="mb-3 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${
            isFolder ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
          }`}
        >
          {isFolder ? <Folder className="h-6 w-6" /> : <FileText className="h-6 w-6" />}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <h3 className="mb-1 truncate text-sm font-medium text-foreground">{file.name}</h3>
        <p className="text-xs text-muted-foreground">{file.size || file.modified}</p>
      </div>
    </div>
  )
}
