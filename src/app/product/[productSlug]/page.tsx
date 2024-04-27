import { permanentRedirect } from 'next/navigation'
import { Metadata } from 'next'
import { productApi } from '@/api/productApi'
import { ProductDescription } from '@/components/pages/product/ProductDescription/ProductDescription'
import { ProductMainContent } from '@/components/pages/product/ProductMainContent/ProductMainContent'
import { ProductList } from '@/components/product/ProductsList/ProductList'
import { MobileAppPromo } from '@/components/ui/MobileAppPromo/MobileAppPromo'
import { getProductPath } from '@/shared/routing/getProductPath'
import { PRODUCTION_URL } from '@/shared/constants/urls'
import { getIdFromSlug } from '@/shared/utils/getIdFromSlug'

interface IPageProps {
  params: { productSlug: string }
}

export async function generateMetadata({
  params
}: IPageProps): Promise<Metadata> {
  try {
    const productId = getIdFromSlug(params.productSlug)
    const product = await productApi.getProduct(productId)
    return {
      title: product?.product?.name ?? 'HorseSmart',
      description: product?.product?.desc ?? 'HorseSmart — ваш идеальный маркетплейс для конного мира',
      alternates: product?.product?.slug ? {
        canonical: `${PRODUCTION_URL}product/${product.product.slug}`
      } : {}
    }
  } catch (error) {
    return {
      title: 'HorseSmart',
      description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
    }
  }
}

export default async function Product({ params }: IPageProps) {
  const productId = getIdFromSlug(params.productSlug)
  const product = await productApi.getProduct(productId || '0')

  if (product?.product?.slug !== params.productSlug) {
    return permanentRedirect(getProductPath(product.product.slug))
  }

  return (
    <main>
      <MobileAppPromo />
      <ProductMainContent product={product} />
      <ProductList title='Вам может подойти' size={5} />
      <ProductDescription product={product} />
    </main>
  )
}
