"use client"

import { Folder, FileText, MoreVertical } from "lucide-react"
import type { FileItem } from "./file-manager"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type FileListItemProps = {
  file: FileItem
}

export function FileListItem({ file }: FileListItemProps) {
  const isFolder = file.type === "folder"

  return (
    <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 px-6 py-3 hover:bg-secondary/30 transition-colors group">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            isFolder ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
          }`}
        >
          {isFolder ? <Folder className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
        </div>
        <span className="truncate text-sm font-medium text-foreground">{file.name}</span>
      </div>
      <div className="flex items-center text-sm text-muted-foreground">{file.modified}</div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{file.size || "—"}</span>
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
    </div>
  )
}
