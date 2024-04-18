import styles from './SecondPromo.module.scss'

export const SecondPromo: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Большой выбор товаров <br /> от разных продавцов</h2>
        <p className={styles.description}>Действительно широкий ассортимент <br /> товаров от разных магазинов</p>
      </div>
    </section>
  )
}
