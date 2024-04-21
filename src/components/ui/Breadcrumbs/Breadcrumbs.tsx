import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'

interface IBreadcrumb {
  name: string
  href: string
}

interface IBreadcrumbsProps {
  items: IBreadcrumb[]
  className?: string
}

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav className={className}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            <Link href={item.name} className={styles.itemName}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}