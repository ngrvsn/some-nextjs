import styles from './Section.module.scss'

interface ISectionProps {
  title?: string
  children: React.ReactNode
}

export const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <section className={styles.wrapper}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  )
}