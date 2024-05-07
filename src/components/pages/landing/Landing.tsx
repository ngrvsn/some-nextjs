import Image from 'next/image'
import Script from 'next/script'
import classNames from 'classnames'
import qrAppDownload from '@/assets/icons/qr-app-download.svg'
import {
  APK_APP_URL,
  DOWNLOAD_ANDROID_APP_LINK,
  DOWNLOAD_IOS_APP_LINK
} from '@/shared/constants/urls'
import styles from './Landing.module.scss'

export const Landing: React.FC = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>Скачивание приложения Horsesmart</h1>
        <section className={styles.content}>
          <div className={styles.qrWrapper}>
            <Image
              src={qrAppDownload}
              alt='qr код для скачивания мобильного приложения'
              className={styles.qrImage}
            />
            <p className={classNames(styles.descriptionText, styles.qrText)}>
              Сканируйте QR-код <br /> через камеру телефона
            </p>
          </div>
          <div className={styles.line} />
          <div className={styles.linksWrapper}>
            <a
              download
              href={APK_APP_URL}
              className={classNames(
                styles.downloadButton,
                styles.downloadApkButton
              )}
            >
              Скачать APK
            </a>
            <a
              href={DOWNLOAD_IOS_APP_LINK}
              target='_blank'
              style={{ marginBottom: 10 }}
              className={styles.downloadButton}
            >
              Скачать в App Store
            </a>
            <a
              href={DOWNLOAD_ANDROID_APP_LINK}
              target='_blank'
              className={styles.downloadButton}
            >
              Скачать в Google Play
            </a>
            <p
              className={classNames(
                styles.descriptionText,
                styles.googleDownloadText
              )}
            >
              Если у вас не работает скачивание через Google Play, попробуйте
              включить VPN или скачать APK
            </p>
          </div>
        </section>
        <Script
          id='download'
          dangerouslySetInnerHTML={{
            __html: `
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
              const params = new URLSearchParams(document.location.search);
              const redirectToMobileApp = params.get("redirectMobileApp");
              if (redirectToMobileApp !== null) {
                setTimeout(() => {
                  window.location.href = 'https://horsesmart.store/landing'
                }, 1000)
                window.location.href = 'https://apple.co/3GRdRmY'
              }
            }
            `
          }}
        />
      </main>
    </>
  )
}
