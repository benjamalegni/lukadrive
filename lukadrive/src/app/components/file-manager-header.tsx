"use client"

import { Search, Grid3x3, List, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type FileManagerHeaderProps = {
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  onUploadClick: () => void
}

export function FileManagerHeader({ viewMode, onViewModeChange, onUploadClick }: FileManagerHeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search files and folders..."
              className="pl-10 bg-secondary/50 border-border/50 focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-secondary/50 p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("grid")}
              className="h-8 w-8 p-0"
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange("list")}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Button
            onClick={onUploadClick}
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
    </header>
  )
}
