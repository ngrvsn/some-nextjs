import { Montserrat } from 'next/font/google'
import Script from 'next/script'
import Image from 'next/image'
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
  description: 'HorseSmart — ваш идеальный маркетплейс для конного мира',
  itunes: {
    appId: '6450919003'
  }
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
        <Script
          strategy='afterInteractive'
          id='yandex-metrika'
          dangerouslySetInnerHTML={{
            __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(97057404, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
          `
          }}
        />
        <noscript>
          <div>
            <Image
              src='https://mc.yandex.ru/watch/97057404'
              width={1}
              height={1}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
