import Image from 'next/image'
import { IProductWithReviews } from '@/models/product'
import roubleIcon from '@/assets/icons/rouble.svg'
import { getNormalizedPrice } from '@/shared/utils/getNormalizedPrice'
import styles from './ProductPrice.module.scss'

interface IProductPriceProps {
  product: IProductWithReviews
}

export const ProductPrice: React.FC<IProductPriceProps> = ({ product }) => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Стоимость товара:</h3>
      <div className={styles.priceWrapper}>
        <Image src={roubleIcon} alt='Рубль' />
        <strong className={styles.price}>{getNormalizedPrice(product.product.price)}</strong>
      </div>
      <button disabled className={styles.howToBuyButton}>Как купить?</button>
    </section>
  )
}
