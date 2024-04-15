import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '@/assets/icons/logo.svg'
import styles from './Header.module.scss'
import { Categories } from './Categories/Categories'
import { Search } from './Search/Search'

export const Header: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.actionsWrapper}>
          <Link href='/'>
            <Image src={logoIcon} alt='Логотип маркетплейса HorseSmart' priority />
          </Link>
          <Categories />
          <Search />
        </div>
      </header>
    </section>
  )
}
