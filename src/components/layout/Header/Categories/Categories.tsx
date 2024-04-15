'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { Collapse } from 'react-collapse'
import categoryOpenIcon from '@/assets/icons/category-open.svg'
import categoryCloseIcon from '@/assets/icons/close.svg'
import goToIcon from '@/assets/icons/go-to.svg'
import { ICategory, ISubCategory } from '@/models/product'
import { productApi } from '@/api/productApi'
import { IMAGES_URL } from '@/shared/constants/urls'
import styles from './Categories.module.scss'

export const Categories: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [categories, setCategories] = React.useState<ICategory[]>([])
  const [activeCategoryId, setActiveCategoryId] = React.useState<string>('')
  const [subCategories, setSubCategories] = React.useState<
    Record<string, ISubCategory[]>
  >({})

  React.useEffect(() => {
    const getCategories = async () => {
      try {
        const responseData = await productApi.getCategories()
        setCategories(responseData)
        if (responseData.length) {
          onCategorySelect(responseData[0]._id)
        }
      } catch (e) {
        toast.error('Ошибка при получении категорий')
      }
    }
    getCategories()
  }, [])

  const onCategorySelect = async (categoryId: string) => {
    setActiveCategoryId(categoryId)
    if (subCategories?.[categoryId] || !categoryId) return
    try {
      const responseData = await productApi.getSubCategories(categoryId)
      setSubCategories((prev) => ({
        ...prev,
        [categoryId]: responseData.subCategories
      }))
    } catch (e) {
      toast.error('Ошибка при получении подкатегорий')
    }
  }

  const activeSubCategories: ISubCategory[][] = React.useMemo(() => {
    return (
      subCategories?.[activeCategoryId]?.reduce((all: any, one: any, i) => {
        const ch = Math.floor(i / 2)
        all[ch] = [].concat(all[ch] || [], one)
        return all
      }, []) ?? []
    )
  }, [activeCategoryId, subCategories])

  return (
    <figure>
      <button
        className={styles.button}
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <Image src={isModalOpen ? categoryCloseIcon : categoryOpenIcon} alt='' className={styles.buttonIcon} />
        <span className={styles.buttonText}>Категории</span>
      </button>
      <aside
        className={styles.modal}
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <ul className={styles.categoriesList}>
          {categories.map((item) => (
            <li key={item._id}>
              <Link
                href='/'
                className={styles.categoryItem}
                style={{
                  backgroundColor:
                    activeCategoryId === item._id ? '#F6F6F6' : 'transparent'
                }}
                onMouseEnter={() => onCategorySelect(item._id)}
              >
                <div className={styles.categoryItemImageWrapper}>
                  <Image
                    src={`${IMAGES_URL}${item.photo}`}
                    alt={`Изображение категории ${item.name}`}
                    width={46}
                    height={46}
                    className={styles.categoryItemImage}
                  />
                </div>
                <p className={styles.categoryItemName}>{item.name}</p>
                <Image
                  src={goToIcon}
                  alt=''
                />
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.subCategoryList}>
          {activeSubCategories.map((subCategories, index) => (
            <div key={index} className={styles.subCategoriesRow}>
              {subCategories.map((item) => (
                <li key={item._id} className={styles.subCategory}>
                  <Link href='/' className={styles.subCategoryText}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          ))}
        </ul>
        <ul className={styles.mobileCategoryList}>
          {categories.map((item) => (
            <div key={item._id}>
              <li className={styles.mobileCategoryItem} onClick={() => onCategorySelect(activeCategoryId === item._id ? '' : item._id)}>
                <div className={styles.categoryItemImageWrapper}>
                  <Image
                    src={`${IMAGES_URL}${item.photo}`}
                    alt={`Изображение категории ${item.name}`}
                    width={46}
                    height={46}
                    className={styles.categoryItemImage}
                  />
                </div>
                <p className={styles.categoryItemName}>{item.name}</p>
                <Image
                  src={goToIcon}
                  alt=''
                  style={{ rotate: activeCategoryId === item._id ? '-90deg' : '90deg' }}
                />
              </li>
              <Collapse isOpened={activeCategoryId === item._id}>
                {subCategories?.[item._id]?.map(item => (
                  <Link key={item._id} href='/' className={styles.mobileSubCategoryItem}>
                    {item.name}
                  </Link>
                ))}
              </Collapse>
            </div>
          ))}
        </ul>
      </aside>
    </figure>
  )
}
