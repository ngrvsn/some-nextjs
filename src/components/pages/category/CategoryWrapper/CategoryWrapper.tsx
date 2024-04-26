import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { ICategoryPageData, IParsedCategory, IProduct } from '@/models/product'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import { CategoryCollapse } from '../CategoryCollapse/CategoryCollapse'
import { CategoryProducts } from '../CategoryProducts/CategoryProducts'
import styles from './CategoryWrapper.module.scss'

interface ICategoryWrapperProps {
  data: ICategoryPageData
  categories: IParsedCategory[]
}

export const CategoryWrapper: React.FC<ICategoryWrapperProps> = ({ data, categories }) => {
  const currentCategory = data?.subCategory ?? data?.category
  return (
    <>
      <Breadcrumbs
        items={Object.values(data)
          .filter((item) => item)
          .map((el: any) => ({
            name: el.title,
            href: getCategoryPath(el.value)
          }))}
        className={styles.navigation}
      />
      <h1 className={styles.title}>{currentCategory?.title}</h1>
      <div className={styles.content}>
        <CategoryCollapse categories={categories} data={data} />
        <CategoryProducts category={data} />
      </div>
    </>
  )
}
