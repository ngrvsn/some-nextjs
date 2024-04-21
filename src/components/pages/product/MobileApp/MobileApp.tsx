import Image from 'next/image'
import logoIcon from '@/assets/icons/logo.svg'
import mobileAppQrCodeIcon from '@/assets/icons/mobile-app-qr.svg'
import { DownloadAppLink } from '@/components/ui'
import styles from './MobileApp.module.scss'

export const MobileApp: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Image src={logoIcon} alt='Логотип компании HorseSmart' priority />
        <h3 className={styles.title}>Для заказа скачайте наше приложение:</h3>
        <div className={styles.desktopQrCode}>
          <Image
            src={mobileAppQrCodeIcon}
            alt='qr-код для скачивания мобильного приложения'
          />
          <p className={styles.imageDescription}>
            Сканируйте QR-код через камеру телефона
          </p>
        </div>
        <div className={styles.mobileAppLinks}>
          <DownloadAppLink
            type='android'
            wrapperClassName={styles.mobileAppLink}
            imageClassName={styles.mobileAppLinkGooglePlayIcon}
          />
          <DownloadAppLink
            type='ios'
            wrapperClassName={styles.mobileAppLink}
            imageClassName={styles.mobileAppLinkAppStoreIcon}
          />
        </div>
      </div>
      <div className={styles.mobileQrCode}>
        <Image
          src={mobileAppQrCodeIcon}
          alt='qr-код для скачивания мобильного приложения'
        />
        <p className={styles.imageDescription}>
          Сканируйте QR-код через камеру телефона
        </p>
      </div>
    </section>
  )
}
