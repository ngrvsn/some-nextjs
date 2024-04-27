import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { IProduct } from '@/models/product'
import { IMAGES_URL } from '@/shared/constants/urls'
import { getNormalizedPrice } from '@/shared/utils/getNormalizedPrice'
import { getProductPath } from '@/shared/routing/getProductPath'
import styles from './ProductItem.module.scss'

interface IProductItemProps {
  item: IProduct
  className?: string
  onNewPage?: boolean
}

export const ProductItem: React.FC<IProductItemProps> = ({ item, className, onNewPage = false }) => {
  return (
    <li className={classNames(styles.wrapper, className)}>
      <Link href={getProductPath(item.slug)} target={onNewPage ? '_blank' : undefined}>
        <div className={styles.photoWrapper}>
          <Image
            src={`${IMAGES_URL}${item.photo[0]}`}
            alt={item.name}
            fill
            priority
            sizes='(max-width: 768px) 25vw, (max-width: 590px) 33vw, (max-width: 428px) 50vw, 20vw'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h3 className={styles.productPrice}>
          {getNormalizedPrice(item.price)}
        </h3>
        <p className={styles.productName}>{item.name}</p>
      </Link>
    </li>
  )
}
