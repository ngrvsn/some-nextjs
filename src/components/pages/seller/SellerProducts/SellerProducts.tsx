'use client'
import React from 'react'
import { toast } from 'react-toastify'
import { ProductItem } from '@/components/product/ProductItem/ProductItem'
import { IProduct } from '@/models/product'
import { productApi } from '@/api/productApi'
import { useObserver } from '@/shared/hooks/useObserver'
import styles from './SellerProducts.module.scss'

interface ISellerProductsProps {
  sellerId: string
}

export const SellerProducts: React.FC<ISellerProductsProps> = ({
  sellerId
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
        seller_id: sellerId
      })
      setProducts(prev => [...prev, ...responseData.products])
      setHasMoreProducts(responseData.products.length > 0)
    } catch (e) {
      toast.error('Не удалось получить товары продавца')
    } finally {
      setIsLoading(false)
    }
  }

  useObserver(lastElementRef, hasMoreProducts, isLoading, getProducts)

  return (
    <section>
      <h2 className={styles.title}>Все товары</h2>
      {!!products.length && (
        <ul className={styles.list}>
          {products.map((item, index) => (
            <ProductItem key={`${item._id}?${index}`} item={item} />
          ))}
        </ul>
      )}
      <div ref={lastElementRef} />
    </section>
  )
}
