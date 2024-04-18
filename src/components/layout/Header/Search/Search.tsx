'use client'
import React from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import Link from 'next/link'
import searchIcon from '@/assets/icons/search.svg'
import searchIconWhite from '@/assets/icons/search-white.svg'
import goToIcon from '@/assets/icons/go-to.svg'
import { productApi } from '@/api/productApi'
import { IProduct, ISubCategory } from '@/models/product'
import { DEBOUNCE_DELAY } from '@/shared/constants/app'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { getNormalizedPrice } from '@/shared/utils/getNormalizedPrice'
import { getProductPath } from '@/shared/routing/getProductPath'
import { IMAGES_URL } from '@/shared/constants/urls'
import styles from './Search.module.scss'

export const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const debouncedSearch = useDebounce(searchValue, DEBOUNCE_DELAY)

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const [isLoadingProducts, setIsLoadingProducts] = React.useState(false)
  const [hasMoreProducts, setHasMoreProducts] = React.useState(true)

  const [subCategories, setSubCategories] = React.useState<ISubCategory[]>([])
  const [products, setProducts] = React.useState<IProduct[]>([])

  const searchValueRef = React.useRef<HTMLInputElement>(null)
  const modalRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (searchValue.length) {
      return setIsModalOpen(true)
    }
    setIsModalOpen(false)
  }, [searchValue])

  const getSearchData = async (searchValue: string) => {
    try {
      setHasMoreProducts(true)
      const responseData = await productApi.getProducts({
        skip: '0',
        limit: '24',
        name: searchValue
      })
      modalRef?.current?.scrollTo({ top: 0 })
      setSubCategories(responseData.subCategories)
      setProducts(responseData.products)
    } catch (e) {
      toast.error('Ошибка при получении данных')
    }
  }

  const getProductsByScroll = async () => {
    if (isLoadingProducts || !hasMoreProducts) return
    setIsLoadingProducts(true)

    try {
      const responseData = await productApi.getProducts({
        skip: products.length.toString(),
        limit: '24',
        name: searchValue
      })
      setProducts((prev) => [...prev, ...responseData.products])
      setHasMoreProducts(responseData.products.length > 0)
    } catch (e) {
      toast.error('Ошибка при получении товаров')
    } finally {
      setIsLoadingProducts(false)
    }
  }

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target
    const threshold = scrollHeight - clientHeight * (1 + 0.3)

    if (scrollTop >= threshold) {
      getProductsByScroll()
    }
  }

  React.useEffect(() => {
    if (debouncedSearch.length) {
      getSearchData(debouncedSearch)
    } else {
      setSubCategories([])
      setProducts([])
    }
  }, [debouncedSearch])

  return (
    <figure className={styles.searchWrapper}>
      <div className={styles.searchInputWrapper}>
        <input
          type='text'
          ref={searchValueRef}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          placeholder='Искать на HorseSmart ...'
          className={styles.searchInput}
        />
        <Image src={searchIcon} alt='' className={styles.searchIcon} />
        <button
          className={styles.searchButton}
          onClick={() => searchValueRef?.current?.focus()}
        >
          <Image src={searchIconWhite} alt='' />
        </button>
      </div>
      <aside
        ref={modalRef}
        className={styles.modal}
        style={{ display: isModalOpen ? 'block' : 'none' }}
        onScroll={handleScroll}
      >
        {!!subCategories.length && (
          <ul>
            {subCategories.map((item) => (
              <li key={item._id}>
                <Link href='/' className={styles.subCategory}>
                  <div>
                    <strong className={styles.subCategoryName}>
                      {item.name}
                    </strong>
                    <p className={styles.subCategoryCatName}>
                      {item.category_id.name}
                    </p>
                  </div>
                  <Image
                    src={goToIcon}
                    className={styles.subCategoryIcon}
                    alt=''
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!!products.length && (
          <ul className={styles.productsList}>
            {products.map((item, index) => (
              <li key={`${item._id}?${index}`} className={styles.product}>
                <Link href={getProductPath(item._id)}>
                  <div className={styles.productPhotoWrapper}>
                    <Image
                      src={`${IMAGES_URL}${item.photo[0]}`}
                      alt={item.name}
                      fill
                      sizes='(max-width: 1120px) 33.3vw, (max-width: 950px) 50vw, (max-width: 744px) 33.3vw, (max-width: 540px) 50vw, (max-width: 380px) 100vw, 25vw'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <strong className={styles.productPrice}>
                    {getNormalizedPrice(item.price)}
                  </strong>
                  <p className={styles.productName}>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </figure>
  )
}
