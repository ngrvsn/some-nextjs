import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '@/assets/icons/logo.svg'
import { productApi } from '@/api/productApi'
import { ADMIN_URL } from '@/shared/constants/urls'
import styles from './Header.module.scss'
import { Categories } from './Categories/Categories'
import { Search } from './Search/Search'

const getSubCategories = async () => {
  try {
    return await productApi.getSubCategories()
  } catch (e) {}
}

export const Header: React.FC = async () => {
  const subCategories = await getSubCategories()

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.actionsWrapper}>
          <Link href='/'>
            <Image src={logoIcon} alt='Логотип компании HorseSmart' priority />
          </Link>
          <Categories />
          <Search />
        </div>
        <nav className={styles.secondaryData}>
          {!!subCategories?.length && (
            <ul className={styles.subCategories}>
              {subCategories.slice(4, 10).map(item => (
                <li key={item._id}>
                  <Link href='/' className={styles.subCategoryItem}>{item.name}</Link>
                </li>
              ))}
            </ul>
          )}
          <a href={ADMIN_URL} target='_blank' className={styles.linkToSellerService}>Продавайте на HorseSmart</a>
        </nav>
      </header>
    </section>
  )
}
