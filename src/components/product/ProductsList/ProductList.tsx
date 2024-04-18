import { productApi } from '@/api/productApi'
import { Section } from '@/components/ui'
import { ProductItem } from '../ProductItem/ProductItem'
import styles from './ProductList.module.scss'

interface IProductListProps {
  title: string
  size?: number
}

const getRandomProducts = async (size: number) => {
  try {
    return await productApi.getRandomProducts({ size: size.toString() })
  } catch (e) {}
}

export const ProductList: React.FC<IProductListProps> = async ({ title, size = 5 }) => {
  const products = await getRandomProducts(size)

  return (
    <Section title={title}>
      {!!products?.length && (
        <ul className={styles.productsList}>
          {products.map((item, index) => <ProductItem key={`${item._id}?${index}`} item={item} />)}
        </ul>
      )}
    </Section>
  )
}