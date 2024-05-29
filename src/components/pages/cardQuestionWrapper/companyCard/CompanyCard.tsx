import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import telegramIcon from '@/assets/icons/telegram.svg'
import {
  CURRENT_SITE_URL,
  PRIVACY_POLICY_LINK,
  SUPPORT_LINK,
  USER_AGREEMENT_LINK
} from '@/shared/constants/urls'
import CompanyCardImage from '@/assets/images/company-card.png'
import styles from './CompanyCard.module.scss'

export const CompanyCard: React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={CompanyCardImage}
            alt='Картинка карточки компании'
            className={styles.CompanyCardImage}
          />
        </div>

        <section className={styles.infoWrapper}>
          <div className={styles.info}>
            <h2 className={styles.cardTitle}>Карточка компании</h2>
            <div className={styles.contactsWrapper}>
              <div className={styles.adressWrapper}>
                <p className={styles.adressHeader}>Наш адрес:</p>
                <p className={styles.adressValue}>
                  141420, Московская область, г.о. Химки, г.Химки, мкр. Сходня,
                  ул Некрасова, д. 2, помещ. 25
                </p>
              </div>
              <div className={styles.contactsColumn}>
                <div className={styles.contactsRow}>
                  <div className={styles.innWrapper}>
                    <p className={styles.innHeader}>ИНН: </p>
                    <p
                      className={classNames(
                        styles.contactsText,
                        styles.contactsLink
                      )}
                    >
                      9724049198
                    </p>
                  </div>
                  <div className={styles.kppWrapper}>
                    <p className={styles.kppHeader}>КПП: </p>
                    <p
                      className={classNames(
                        styles.contactsText,
                        styles.contactsLink
                      )}
                    >
                      504701001
                    </p>
                  </div>
                </div>
                <div className={styles.contactsRow}>
                  <div className={styles.phoneWrapper}>
                    <p className={styles.phoneHeader}>Номер телефона: </p>
                    <a
                      href='tel:89995200003'
                      className={classNames(
                        styles.contactsText,
                        styles.contactsLink
                      )}
                    >
                      8 (999) 520 00-03
                    </a>
                  </div>
                  <div className={styles.emailWrapper}>
                    <p className={styles.emailHeader}>Почта: </p>
                    <a
                      href='mailto:info@horsesmart.ru'
                      className={classNames(
                        styles.contactsText,
                        styles.contactsLink
                      )}
                    >
                      info@horsesmart.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.linksRow}>
                <div
                  className={classNames(
                    styles.stylesInfoWrapper,
                    styles.adaptiveNone
                  )}
                >
                  <a
                    href={PRIVACY_POLICY_LINK}
                    target='_blank'
                    className={styles.privacyPolicyLink}
                  >
                    Политика обработки персональных данных
                  </a>
                </div>
                <div className={styles.infoLinksWrapper}>
                  <a
                    href={USER_AGREEMENT_LINK}
                    target='_blank'
                    className={styles.privacyPolicyLink}
                  >
                    Пользовательское соглашение
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a href={SUPPORT_LINK} target='_blank' className={styles.supportLink}>
            <Image src={telegramIcon} alt='telegram' />
            <span className={styles.supportLinkText}>
              Техническая поддержка
            </span>
          </a>
        </section>
      </div>
    </main>
  )
}
