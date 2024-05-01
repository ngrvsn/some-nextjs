import Link from 'next/link'
import Image from 'next/image'
import { productApi } from '@/api/productApi'
import { ICategory } from '@/models/product'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import { IMAGES_URL } from '@/shared/constants/urls'
import { Section } from '@/components/ui'
import styles from './Categories.module.scss'

export const Categories: React.FC = async () => {
  const categories = await productApi.getCategories() as ICategory[]
  return (
    <Section title='Категории'>
      {!!categories?.length && (
        <ul className={styles.categoriesList}>
          {categories.map(item => (
            <li key={item._id} className={styles.categoryItem}>
              <Link href={getCategoryPath(item.slug)}>
                <div className={styles.categoryPhotoWrapper}>
                  <Image
                    src={`${IMAGES_URL}${item.photo}`}
                    alt={`Категория ${item.name}`}
                    fill
                    sizes='(max-width: 590px) 33.3vw, 20vw'
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3 className={styles.categoryItemName}>{item.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
