"use client"

import type { FileItem } from "./file-manager"
import { FileCard } from "./file-card"
import { FileListItem } from "./file-list-item"

type FileGridProps = {
  files: FileItem[]
  viewMode: "grid" | "list"
}

export function FileGrid({ files, viewMode }: FileGridProps) {
  if (viewMode === "list") {
    return (
      <div className="flex-1 overflow-auto p-6">
        <div className="rounded-lg border border-border bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 border-b border-border bg-secondary/30 px-6 py-3 text-sm font-medium text-muted-foreground">
            <div>Name</div>
            <div>Modified</div>
            <div>Size</div>
          </div>
          <div className="divide-y divide-border">
            {files.map((file) => (
              <FileListItem key={file.id} file={file} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  )
}
