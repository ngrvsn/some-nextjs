import { sellerApi } from '@/api/sellerApi'
import { SellerData } from '@/components/pages/seller/SellerData/SellerData'

export default async function Seller({
  params
}: {
  params: { sellerId: string }
}) {
  const seller = await sellerApi.getSellerData(params.sellerId)
  return (
    <main>
      <SellerData seller={seller} />
    </main>
  )
}
