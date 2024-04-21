import classNames from 'classnames'
import { ICharacteristic } from '@/models/product'
import styles from './ProductCharacteristic.module.scss'

interface IProductCharacteristicProps {
  item: ICharacteristic
  className?: string
}

export const ProductCharacteristic: React.FC<IProductCharacteristicProps> = ({ item, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <dt className={styles.name}>{item.name}:</dt>
      <dd className={styles.value}>{item.value}</dd>
    </div>
  )
}
