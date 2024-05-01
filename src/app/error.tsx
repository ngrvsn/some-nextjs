'use client'
import { Error } from '@/components/error/Error'

export default function ErrorPage({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <Error status={error.message ? 404 : 500} />
}
