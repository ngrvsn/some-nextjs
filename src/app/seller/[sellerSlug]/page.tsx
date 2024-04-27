import { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { sellerApi } from '@/api/sellerApi'
import { SellerData } from '@/components/pages/seller/SellerData/SellerData'
import { getIdFromSlug } from '@/shared/utils/getIdFromSlug'
import { PRODUCTION_URL } from '@/shared/constants/urls'
import { getSellerPath } from '@/shared/routing/getSellerPath'

interface IPageProps {
  params: { sellerSlug: string }
}

export async function generateMetadata({
  params
}: IPageProps): Promise<Metadata> {
  try {
    const sellerId = getIdFromSlug(params.sellerSlug)
    const seller = await sellerApi.getSellerData(sellerId)
  
    return {
      title: seller?.seller?.shop_details?.shop_name ?? 'HorseSmart',
      description: seller?.seller?.shop_details?.desc ?? 'HorseSmart — ваш идеальный маркетплейс для конного мира',
      alternates: seller?.seller?.slug ? {
        canonical: `${PRODUCTION_URL}product/${seller.seller.slug}`
      } : {}
    }
  } catch (error) {
    return {
      title: 'HorseSmart',
      description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
    }
  }
}

export default async function Seller({ params }: IPageProps) {
  const sellerId = getIdFromSlug(params.sellerSlug)
  const seller = await sellerApi.getSellerData(sellerId)

  if (seller.seller.slug !== params.sellerSlug) {
    return permanentRedirect(getSellerPath(seller.seller.slug))
  }

  return (
    <main>
      <SellerData seller={seller} />
    </main>
  )
}
