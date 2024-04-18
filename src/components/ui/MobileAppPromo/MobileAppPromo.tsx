import styles from './MobileAppPromo.module.scss'

export const MobileAppPromo: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Заказывайте в новом приложении HorseSmart!</h2>
          <p className={styles.description}>Мы собрали в одном месте все что нужно каждому всаднику.</p>
        </div>
      </div>
    </section>
  )
}