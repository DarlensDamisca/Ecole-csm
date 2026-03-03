import { BrowserRouter } from "react-router-dom"
import { PDFViewer } from "@/polymet/components/pdf-viewer"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PDFViewerRender() {
  const [showViewer, setShowViewer] = useState(true)

  return (
    <BrowserRouter>
      <div className="p-8 space-y-6 bg-background min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">PDF Viewer Component</h1>
          <p className="text-muted-foreground">Visionneuse PDF avec navigation, zoom et actions</p>
        </div>

        {!showViewer && (
          <Button onClick={() => setShowViewer(true)}>
            Afficher la visionneuse
          </Button>
        )}

        {showViewer && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Visionneuse avec 28 pages</h3>
            <PDFViewer
              totalPages={28}
              onDownload={() => console.log('Download PDF')}
              onClose={() => setShowViewer(false)}
            />
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Visionneuse avec 5 pages (sans actions)</h3>
          <PDFViewer
            totalPages={5}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}