import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { DownloadAppLink } from '@/components/ui'
import promoBanner from '@/assets/images/footer-promo.png'
import logo from '@/assets/icons/logo.svg'
import telegramIcon from '@/assets/icons/telegram.svg'
import { PRIVACY_POLICY_LINK, SUPPORT_LINK } from '@/shared/constants/urls'
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.promo}>
          <div className={styles.promoContent}>
            <h2 className={styles.promoTitle}>
              Заказывайте в новом <br /> приложении HorseSmart!
            </h2>
            <p className={styles.promoDescription}>
              Мы собрали в одном месте все что нужно каждому всаднику.
            </p>
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
          </div>
          <Image src={promoBanner} alt='QR-код для скачивания мобильного приложения' className={styles.promoBanner} priority />
        </section>
        <section className={styles.info}>
          <div className={styles.infoHeader}>
            <Link href='/'>
              <Image
                src={logo}
                width={236}
                height={59}
                alt='Логотип компании HorseSmart'
                className={styles.logo}
              />
            </Link>
            <div className={styles.infoLinksWrapper}>
              <a
                href={SUPPORT_LINK}
                target='_blank'
                className={styles.supportLink}
              >
                <Image src={telegramIcon} alt='telegram' />
                <span className={styles.supportLinkText}>
                  Техническая поддержка
                </span>
              </a>
              <a
                href={PRIVACY_POLICY_LINK}
                target='_blank'
                className={styles.privacyPolicyLink}
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
          <div className={styles.contacts}>
            <p className={classNames(styles.contactsText, styles.address)}>
              141420, Московская область, г.о. Химки, г.Химки, мкр.
              Сходня, ул Некрасова, д. 2, помещ. 25
            </p>
            <div className={styles.contactsColumn}>
              <div className={styles.contactsRow} style={{ marginBottom: 6 }}>
                <p className={styles.contactsText}>ИНН: 9724049198</p>
                <p className={styles.contactsText}>КПП: 504701001</p>
              </div>
              <div className={styles.contactsRow}>
                <a
                  href='tel:89995200003'
                  className={classNames(
                    styles.contactsText,
                    styles.contactsLink
                  )}
                >
                  8 (999) 520 00-03
                </a>
                <a
                  href='mailto:info@horsesmart.ru'
                  className={classNames(
                    styles.contactsText,
                    styles.contactsLink
                  )}
                  style={{ textDecoration: 'underline' }}
                >
                  info@horsesmart.ru
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
