'use client'
import React from 'react'
import { Collapse } from 'react-collapse'
import Image from 'next/image'
import Link from 'next/link'
import { ICategoryPageData, IParsedCategory } from '@/models/product'
import goToIcon from '@/assets/icons/go-to.svg'
import { IMAGES_URL } from '@/shared/constants/urls'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import styles from './CategoryCollapse.module.scss'

interface ICategoryCollapseProps {
  categories: IParsedCategory[]
  data: ICategoryPageData
}

export const CategoryCollapse: React.FC<ICategoryCollapseProps> = ({
  categories,
  data
}) => {
  const [activeCategoryId, setActiveCategoryId] = React.useState(
    data.category?.value as string
  )
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <div key={category.value}>
          <li
            className={styles.categoryItem}
            style={{ backgroundColor: activeCategoryId === category.value ? '#F6F6F6' : 'transparent' }}
            onClick={() =>
              setActiveCategoryId(activeCategoryId === category.value ? '' : category.value)
            }
          >
            <div className={styles.categoryItemImageWrapper}>
              <Image
                src={`${IMAGES_URL}${category.photo}`}
                alt={category.title}
                width={46}
                height={46}
                className={styles.categoryItemImage}
              />
            </div>
            <p className={styles.categoryItemName}>{category.title}</p>
            <Image
              src={goToIcon}
              alt=''
              style={{
                rotate: activeCategoryId === category.value ? '-90deg' : '90deg'
              }}
            />
          </li>
          <Collapse isOpened={activeCategoryId === category.value}>
            {category.children.map((subCategory) => (
              <Link
                key={subCategory.value}
                href={getCategoryPath(subCategory.value)}
                className={styles.subCategoryItem}
                style={{ backgroundColor: data.subCategory?.value === subCategory.value ? '#F6F6F6' : 'transparent' }}
              >
                {subCategory.title}
              </Link>
            ))}
          </Collapse>
        </div>
      ))}
    </ul>
  )
}
