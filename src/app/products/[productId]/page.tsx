import { productApi } from '@/api/productApi'
import { ProductDescription } from '@/components/pages/product/ProductDescription/ProductDescription'
import { ProductMainContent } from '@/components/pages/product/ProductMainContent/ProductMainContent'
import { ProductList } from '@/components/product/ProductsList/ProductList'
import { MobileAppPromo } from '@/components/ui/MobileAppPromo/MobileAppPromo'

export default async function Product({
  params
}: {
  params: { productId: string }
}) {
  const product = await productApi.getProduct(params.productId)
  return (
    <main>
      <MobileAppPromo />
      <ProductMainContent product={product} />
      <ProductList title='Вам может подойти' size={5} />
      <ProductDescription product={product} />
    </main>
  )
}
