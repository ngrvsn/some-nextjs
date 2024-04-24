import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import goToSellerIcon from '@/assets/icons/go-to-seller.svg'
import { ICharacteristic, IProductWithReviews } from '@/models/product'
import { ProductCharacteristic } from '@/components/product/ProductCharacteristic/ProductCharacteristic'
import { getSellerPath } from '@/shared/routing/getSellerPath'
import styles from './ProductDescription.module.scss'

interface IProductDescriptionProps {
  product: IProductWithReviews
}

export const ProductDescription: React.FC<IProductDescriptionProps> = ({ product }) => {

  const characteristicsMap: ICharacteristic[][] = React.useMemo(() => {
    return (
      product.product?.characteristic.reduce((all: any, one: any, i) => {
        const ch = Math.floor(i / 2)
        all[ch] = [].concat(all[ch] || [], one)
        return all
      }, []) ?? []
    )
  }, [product])


  return (
    <section id='details' className={styles.wrapper}>
      <h3 className={styles.title}>Описание товара:</h3>
      <p className={styles.description}>{product.product.desc}</p>
      {!!characteristicsMap.length && (
        <>
          <h3 className={styles.title} style={{ marginBottom: 13 }}>Характеристики:</h3>
          <dl>
            {characteristicsMap.map((characteristics, index) => (
              <div key={index} className={styles.characteristicRow}>
                {characteristics.map((item, index) => <ProductCharacteristic key={index} item={item} className={styles.characteristicItem} />)}
              </div>
            ))}
          </dl>
        </>
      )}
      <div className={styles.info}>
        <p className={styles.infoText}>Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер и основывается на последних доступных к моменту публикации сведениях</p>
        {product.product?.seller_id && (
          <Link href={getSellerPath(product.product.seller_id._id)} className={styles.goToSeller}>
            <span className={styles.goToSellerText}>Все товары продавца</span>
            <Image src={goToSellerIcon} alt='' />
          </Link>
        )}
      </div>
    </section>
  )
}