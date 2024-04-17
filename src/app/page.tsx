import { Categories } from '@/components/pages//main/Categories/Categories'
import { Promo } from '@/components/pages/main/Promo/Promo'
import { ProductList } from '@/components/product/ProductsList/ProductList'

export default function Main() {
  return (
    <main>
      <Promo />
      <Categories />
      <ProductList title='Успей купить!' size={10} />
    </main>
  )
}
