import { permanentRedirect } from 'next/navigation'
import { Metadata } from 'next'
import { productApi } from '@/api/productApi'
import { CategoryWrapper } from '@/components/pages/category/CategoryWrapper/CategoryWrapper'
import { ICategoryPageData, IParsedCategory } from '@/models/product'
import { getIdFromSlug } from '@/shared/utils/getIdFromSlug'
import { getCategoryPath } from '@/shared/routing/getCategoryPath'
import { PRODUCTION_URL } from '@/shared/constants/urls'

interface IPageProps {
  params: { categorySlug: string }
}

const findValueInCategories = (
  categories: IParsedCategory[],
  valueToFind: string
): ICategoryPageData => {
  for (const category of categories) {
    if (category.value === valueToFind) {
      return { category, subCategory: null }
    }

    for (const subCategory of category.children) {
      if (subCategory.value === valueToFind) {
        return {
          category,
          subCategory
        }
      }
    }
  }

  return { category: null, subCategory: null }
}

export async function generateMetadata({
  params
}: IPageProps): Promise<Metadata> {
  try {
    const categories = (await productApi.getCategories(true)) as IParsedCategory[]
    const categoryId = getIdFromSlug(params.categorySlug)
    const data = findValueInCategories(categories, categoryId)
  
    return {
      title: data?.subCategory?.title ?? data?.category?.title ?? 'HorseSmart',
      alternates: (data?.subCategory?.slug || data?.category?.slug) ? {
        canonical: `${PRODUCTION_URL}category/${
          data?.subCategory?.slug ?? data?.category?.slug
        }`
      } : {}
    }
  } catch (error) {
    return {
      title: 'HorseSmart',
      description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
    }
  }
}

export default async function Category({ params }: IPageProps) {
  const categories = (await productApi.getCategories(true)) as IParsedCategory[]
  const categoryId = getIdFromSlug(params.categorySlug)
  const data = findValueInCategories(categories, categoryId)

  if (!data.category && !data.subCategory) {
    throw new Error('404')
  }

  if (data.subCategory && data.subCategory.slug !== params.categorySlug) {
    return permanentRedirect(getCategoryPath(data.subCategory.slug))
  }

  if (
    !data.subCategory &&
    data.category &&
    data.category.slug !== params.categorySlug
  ) {
    return permanentRedirect(getCategoryPath(data.category.slug))
  }

  return (
    <main>
      <CategoryWrapper data={data} categories={categories} />
    </main>
  )
}
