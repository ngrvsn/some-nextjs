import Image from 'next/image'
import Link from 'next/link'
import logoIcon from '@/assets/icons/logo.svg'
import { ICategory } from '@/models/product'
import { productApi } from '@/api/productApi'
import { ADMIN_URL, CURRENT_SITE_URL } from '@/shared/constants/urls'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import { QuestionButton } from '@/components/pages/cardQuestionWrapper/QuestionButton'
import { ArticlesButton } from '@/components/pages/article/ArticleButton'
import styles from './Header.module.scss'
import { Categories } from './Categories/Categories'
import { Search } from './Search/Search'

const getCategories = async () => {
  try {
    return (await productApi.getCategories()) as ICategory[]
  } catch (e) {}
}

export const Header: React.FC = async () => {
  const categories = await getCategories()

  return (
    <header className={styles.container}>
      <QuestionButton />
      <ArticlesButton />
      <div className={styles.header}>
        <div className={styles.actionsWrapper}>
          <Link href={CURRENT_SITE_URL as string}>
            <Image src={logoIcon} alt='Логотип компании HorseSmart' priority />
          </Link>
          <Categories />

          <Search />
        </div>
        <nav className={styles.secondaryData}>
          {!!categories?.length && (
            <ul className={styles.subCategories}>
              {categories.map((item) => (
                <li key={item._id}>
                  <Link
                    href={getCategoryPath(item.slug)}
                    className={styles.subCategoryItem}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <a
            href={ADMIN_URL}
            target='_blank'
            className={styles.linkToSellerService}
          >
            Продавайте на HorseSmart
          </a>
        </nav>
      </div>
    </header>
  )
}
