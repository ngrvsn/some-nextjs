import { Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { Wrapper } from '@/components/layout/Wrapper/Wrapper'
import type { Metadata } from 'next'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/index.scss'
import '@mivis/petmart-api'

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'HorseSmart',
  description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={montserrat.className}>
        <Wrapper>{children}</Wrapper>
        <ToastContainer
          className={montserrat.className}
          style={{ fontSize: 14, fontWeight: 600 }}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          autoClose={5000}
          hideProgressBar
        />
      </body>
    </html>
  )
}
