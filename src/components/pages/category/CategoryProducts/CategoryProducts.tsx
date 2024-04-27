'use client'
import React from 'react'
import { toast } from 'react-toastify'
import { ProductItem } from '@/components/product/ProductItem/ProductItem'
import { ICategoryPageData, IProduct } from '@/models/product'
import { productApi } from '@/api/productApi'
import { useObserver } from '@/shared/hooks/useObserver'
import styles from './CategoryProducts.module.scss'

interface ICategoryProductsProps {
  category: ICategoryPageData
}

export const CategoryProducts: React.FC<ICategoryProductsProps> = ({
  category
}) => {
  const [products, setProducts] = React.useState<IProduct[]>([])
  const [hasMoreProducts, setHasMoreProducts] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)

  const lastElementRef = React.useRef<HTMLDivElement>(null)

  const getProducts = async () => {
    try {
      setIsLoading(true)
      const responseData = await productApi.getProducts({
        skip: products.length.toString(),
        limit: '24',
        category_id: category?.category?.value ?? '',
        subCategory_id: category?.subCategory?.value ?? ''
      })
      setProducts(prev => [...prev, ...responseData.products])
      setHasMoreProducts(responseData.products.length > 0)
    } catch (e) {
      toast.error('Не удалось получить товары')
    } finally {
      setIsLoading(false)
    }
  }

  useObserver(lastElementRef, hasMoreProducts, isLoading, getProducts)

  return (
    <div>
      {!!products.length && (
        <section className={styles.wrapper}>
          <ul className={styles.list}>
            {products.map((item, index) => (
              <ProductItem key={`${item._id}?${index}`} item={item} className={styles.item} onNewPage />
            ))}
          </ul>
        </section>
      )}
      <div ref={lastElementRef} />
    </div>
  )
}
