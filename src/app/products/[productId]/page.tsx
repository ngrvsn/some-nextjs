import { productApi } from '@/api/productApi'
import { MobileAppPromo } from '@/components/ui/MobileAppPromo/MobileAppPromo'

export default async function Product({ params }: { params: { productId: string } }) {
  const product = await productApi.getProduct(params.productId)
  return (
    <main>
      <MobileAppPromo />
    </main>
  )
}
