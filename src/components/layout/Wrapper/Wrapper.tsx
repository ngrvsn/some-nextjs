import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
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
        <Footer />
      </div>
    </div>
  )
}
