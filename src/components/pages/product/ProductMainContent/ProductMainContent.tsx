import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { IProductWithReviews } from '@/models/product'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import { ProductAbout } from '../ProductAbout/ProductAbout'
import { ProductPrice } from '../ProductPrice/ProductPrice'
import { MobileApp } from '../MobileApp/MobileApp'
import styles from './ProductMainContent.module.scss'

interface IProductMainContentProps {
  product: IProductWithReviews
}

export const ProductMainContent: React.FC<IProductMainContentProps> = ({ product }) => {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: product.product.category_id.name, href: getCategoryPath(product.product.category_id._id) },
          { name: product.product.subCategory_id.name, href: getCategoryPath(product.product.subCategory_id._id) }
        ]}
        className={styles.breadcrumbs}
      />
      <div className={styles.wrapper}>
        <ProductAbout product={product} />
        <div className={styles.contentRightColumn}>
          <ProductPrice product={product} />
          <MobileApp />
        </div>
      </div>
    </>
  )
}
