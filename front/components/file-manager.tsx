"use client"

import { useState } from "react"
import { FileManagerHeader } from "./file-manager-header"
import { FileManagerSidebar } from "./file-manager-sidebar"
import { FileGrid } from "./file-grid"
import { UploadDialog } from "./upload-dialog"

export type FileItem = {
  id: string
  name: string
  type: "file" | "folder"
  size?: string
  modified: string
  thumbnail?: string
}

export function FileManager() {
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: "1",
      name: "Project Documents",
      type: "folder",
      modified: "2 days ago",
    },
    {
      id: "2",
      name: "Design Assets",
      type: "folder",
      modified: "5 days ago",
    },
    {
      id: "3",
      name: "Presentation.pdf",
      type: "file",
      size: "2.4 MB",
      modified: "1 week ago",
    },
    {
      id: "4",
      name: "Budget_2024.xlsx",
      type: "file",
      size: "856 KB",
      modified: "3 days ago",
    },
    {
      id: "5",
      name: "Team_Photo.jpg",
      type: "file",
      size: "4.2 MB",
      modified: "1 day ago",
    },
    {
      id: "6",
      name: "Meeting_Notes.docx",
      type: "file",
      size: "124 KB",
      modified: "4 hours ago",
    },
    {
      id: "7",
      name: "Archive",
      type: "folder",
      modified: "2 weeks ago",
    },
    {
      id: "8",
      name: "Video_Tutorial.mp4",
      type: "file",
      size: "156 MB",
      modified: "6 days ago",
    },
  ])

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)

  const handleUpload = (name: string, type: "file" | "folder") => {
    const newItem: FileItem = {
      id: Date.now().toString(),
      name,
      type,
      size: type === "file" ? "0 KB" : undefined,
      modified: "Just now",
    }
    setFiles([newItem, ...files])
  }

  return (
    <div className="flex h-screen bg-background">
      <FileManagerSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <FileManagerHeader
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onUploadClick={() => setUploadDialogOpen(true)}
        />
        <FileGrid files={files} viewMode={viewMode} />
      </div>
      <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} onUpload={handleUpload} />
    </div>
  )
}
