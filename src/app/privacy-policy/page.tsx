import { PDFViewer } from '@/components/ui/PDFViwer/PDFViwer'

export default function PrivacyPolicy() {
  return (
    <PDFViewer workerPath='/pdf.worker.min.js' filePath='/privacy-policy.pdf' />
  )
}
