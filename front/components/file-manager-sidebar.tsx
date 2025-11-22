"use client"

import { Cloud, Folder, Star, Clock, Trash2, HardDrive } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navigation = [
  { name: "My Drive", icon: Cloud, count: null },
  { name: "Shared", icon: Folder, count: 12 },
  { name: "Starred", icon: Star, count: 5 },
  { name: "Recent", icon: Clock, count: null },
  { name: "Trash", icon: Trash2, count: 3 },
]

export function FileManagerSidebar() {
  const [activeItem, setActiveItem] = useState("My Drive")

  return (
    <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3 border-b border-border px-6 py-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Cloud className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">CloudDrive</h1>
            <p className="text-xs text-muted-foreground">File Manager</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                activeItem === item.name
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </div>
              {item.count !== null && <span className="text-xs text-muted-foreground">{item.count}</span>}
            </button>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <div className="rounded-lg bg-secondary/50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Storage</span>
            </div>
            <div className="mb-2 h-2 overflow-hidden rounded-full bg-background">
              <div className="h-full w-[68%] rounded-full bg-primary" />
            </div>
            <p className="text-xs text-muted-foreground">6.8 GB of 10 GB used</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
