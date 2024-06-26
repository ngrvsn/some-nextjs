import Image from 'next/image'
import classNames from 'classnames'
import becomeSellerIcon from '@/assets/icons/become-seller.svg'
import becomeSellerDesktopImage from '@/assets/images/seller-desktop.png'
import becomeSellerTabletImage from '@/assets/images/seller-tablet.png'
import becomeSellerMobileImage from '@/assets/images/seller-mobile.png'
import { DownloadAppLink } from '@/components/ui'
import { ADMIN_URL } from '@/shared/constants/urls'
import styles from './Promo.module.scss'

export const Promo: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.mobileApp}>
        <h2 className={styles.mobileAppTitle}>
          Заказывайте в новом приложении HorseSmart
        </h2>
        <div className={styles.mobileAppLinksWrapper}>
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
      </article>
      <article className={styles.sellerApp}>
        <div className={styles.sellerAppContent}>
          <h2 className={styles.sellerAppTitle}>Продавайте на Horsesmart</h2>
          <p className={styles.sellerAppDescription}>
            Станьте частью нашего динамично развивающегося онлайн-рынка, где
            тысячи покупателей уже ждут вашей уникальной продукции!
          </p>
          <a
            href={ADMIN_URL}
            target='_blank'
            className={styles.becomeSellerLink}
          >
            <span className={styles.becomeSellerLinkText}>Стать продавцом</span>
            <Image
              src={becomeSellerIcon}
              alt=''
              className={styles.becomeSellerLinkIcon}
            />
          </a>
        </div>
        <Image
          src={becomeSellerDesktopImage}
          alt=''
          className={classNames(
            styles.becomeSellerImage,
            styles.becomeSellerImageDesktop
          )}
        />
        <Image
          src={becomeSellerTabletImage}
          alt=''
          className={classNames(
            styles.becomeSellerImage,
            styles.becomeSellerImageTablet
          )}
        />
        <Image
          src={becomeSellerMobileImage}
          alt=''
          className={classNames(
            styles.becomeSellerImage,
            styles.becomeSellerImageMobile
          )}
        />
      </article>
    </section>
  )
}
