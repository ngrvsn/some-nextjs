import { PDFViewer } from '@/components/ui/PDFViwer/PDFViwer'

export default function UserAgreement() {
  return (
    <PDFViewer workerPath='/pdf.worker.min.js' filePath='/user-agreement.pdf' />
  )
}
