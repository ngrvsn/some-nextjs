'use client'

import { Worker, Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

interface IPDFViewerProps {
  workerPath: string
  filePath: string
}

export const PDFViewer: React.FC<IPDFViewerProps> = ({
  workerPath,
  filePath
}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <main style={{ height: '85vh', marginBottom: 30 }}>
      <Worker workerUrl={workerPath}>
        <Viewer fileUrl={filePath} plugins={[defaultLayoutPluginInstance]} defaultScale={1} />
      </Worker>
    </main>
  )
}
