import { BrowserRouter } from "react-router-dom"
import { AdminLayout } from "@/polymet/layouts/admin-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function AdminLayoutRender() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <div className="space-y-6">
          <Skeleton className="h-8 w-64 bg-muted" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-32 w-full bg-muted" />
            <Skeleton className="h-32 w-full bg-muted" />
            <Skeleton className="h-32 w-full bg-muted" />
          </div>
          <Skeleton className="h-64 w-full bg-muted" />
        </div>
      </AdminLayout>
    </BrowserRouter>
  )
}