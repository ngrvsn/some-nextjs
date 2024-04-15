import { Header } from '@/components/layout/Header/Header'
import styles from './Wrapper.module.scss'

interface IWrapperProps {
  children: React.ReactNode
}

export const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        {children}
      </div>
    </div>
  )
}
