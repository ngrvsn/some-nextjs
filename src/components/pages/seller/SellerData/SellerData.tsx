import Image from 'next/image'
import { ISellerShowcase } from '@/models/seller'
import sellerIcon from '@/assets/icons/seller.svg'
import previewStarIcon from '@/assets/icons/preview-star.svg'
import { IMAGES_URL } from '@/shared/constants/urls'
import { SellerProducts } from '../SellerProducts/SellerProducts'
import styles from './SellerData.module.scss'

interface ISellerDataProps {
  seller: ISellerShowcase
}

export const SellerData: React.FC<ISellerDataProps> = ({ seller }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerIcon}>
          <Image src={sellerIcon} alt='' width={19} height={18} />
        </div>
        <h1 className={styles.sellerName}>
          {seller.seller.shop_details.shop_name}
        </h1>
      </header>
      <section>
        <dl className={styles.statistics}>
          <div className={styles.statisticItem}>
            <div className={styles.statisticItemReview}>
              <Image
                src={previewStarIcon}
                alt=''
                className={styles.statisticItemReviewIcon}
              />
              <dt className={styles.statisticItemValue}>
                {seller.averageRating || 0}
              </dt>
            </div>
            <dd className={styles.statisticItemName}>Рейтинг</dd>
          </div>
          <div className={styles.statisticItem}>
            <dt className={styles.statisticItemValue}>{seller.reviewsCount}</dt>
            <dd className={styles.statisticItemName}>Отзывов</dd>
          </div>
          <div className={styles.statisticItem}>
            <dt className={styles.statisticItemValue}>
              {seller?.purchasesCount ?? 0}
            </dt>
            <dd className={styles.statisticItemName}>Сделок</dd>
          </div>
        </dl>
        <p className={styles.sellerDescription}>
          {seller.seller.shop_details.desc}
        </p>
      </section>
      <section className={styles.sellerBannerWrapper}>
        <Image
          src={`${IMAGES_URL}${seller.seller.shop_details.banner}`}
          alt={`Баннер магазина ${seller.seller.shop_details.shop_name}`}
          priority
          width={1200}
          height={600}
          className={styles.sellerBanner}
        />
      </section>
      <SellerProducts sellerId={seller.seller._id} />
    </div>
  )
}
