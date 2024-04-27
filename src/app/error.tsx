'use client'
import { Error } from '@/components/error/Error'
import { myError } from '@/shared/utils/myError'

export default function ErrorPage({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { status } = myError.parse(error.message)
  return <Error status={status} />
}
