import Image from 'next/image'
import { ReviewsStars } from '@/components/ui/ReviewsStars/ReviewsStars'
import { IProductWithReviews } from '@/models/product'
import sellerIcon from '@/assets/icons/seller.svg'
import goToFullProductDataIcon from '@/assets/icons/all-characteristic.svg'
import { ProductCharacteristic } from '@/components/product/ProductCharacteristic/ProductCharacteristic'
import { getDeclination } from '@/shared/utils/getDeclination'
import styles from './ProductAbout.module.scss'
import { ImageSlider } from './ui/ImagesSlider/ImagesSlider'

interface IProductInfoProps {
  product: IProductWithReviews
}

export const ProductAbout: React.FC<IProductInfoProps> = ({ product }) => {
  return (
    <section className={styles.wrapper}>
      {product.product?.seller_id?.shop_details?.shop_name && (
        <div className={styles.sellerWrapper}>
          <div className={styles.sellerIcon}>
            <Image src={sellerIcon} alt='' />
          </div>
          <p className={styles.sellerName}>
            {product.product.seller_id.shop_details.shop_name}
          </p>
        </div>
      )}
      <h1 className={styles.productName}>{product.product.name}</h1>
      <div className={styles.reviewPreview}>
        <ReviewsStars value={product.reviewsData.averageRating} />
        <p className={styles.reviewsCountText}>
          {product.reviewsData.count}{' '}
          {getDeclination(product.reviewsData.count, [
            'отзывов',
            'отзыв',
            'отзыва'
          ])}
        </p>
      </div>
      <div className={styles.contentWrapper}>
        <ImageSlider
          images={product.product.photo}
          productName={product.product.name}
        />
        <div className={styles.goToFullProductDataWrapper}>
          {!!product.product.characteristic.length ? (
            <>
              <h3 className={styles.contentSectionTitle}>Характеристики:</h3>
              <dl>
                {product.product.characteristic
                  .slice(0, 5)
                  .map((item, index) => (
                    <ProductCharacteristic key={index} item={item} />
                  ))}
              </dl>
              <a href='#details' className={styles.goToFullProductData}>
                <span className={styles.goToFullProductDataText}>Все характеристики</span>
                <Image src={goToFullProductDataIcon} alt='' />
              </a>
            </>
          ) : (
            <>
              <h3 className={styles.contentSectionTitle}>Описание:</h3>
              <p className={styles.productDescription}>
                {product.product.desc}
              </p>
              <a href='#details' className={styles.goToFullProductData}>
                <span className={styles.goToFullProductDataText}>Полное описание</span>
                <Image src={goToFullProductDataIcon} alt='' />
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
