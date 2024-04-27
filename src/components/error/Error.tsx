import Image from 'next/image'
import errorIcon from '@/assets/icons/error-page.svg'
import styles from './Error.module.scss'

interface IErrorProps {
  status: number
}

export const Error: React.FC<IErrorProps> = ({ status }) => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{status}</h1>
      <p className={styles.description}>Упс! Произошла ошибка!</p>
      <Image src={errorIcon} alt='' className={styles.image} />
    </main>
  )
}