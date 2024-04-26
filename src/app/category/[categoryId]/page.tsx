import { productApi } from '@/api/productApi'
import { CategoryWrapper } from '@/components/pages/category/CategoryWrapper/CategoryWrapper'
import {
  ICategoryPageData,
  IParsedCategory,
  IProduct
} from '@/models/product'

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

export default async function Category({
  params
}: {
  params: { categoryId: string }
}) {
  const categories = (await productApi.getCategories(true)) as IParsedCategory[]

  const data = findValueInCategories(categories, params.categoryId)

  if (!data.category && !data.subCategory) {
    throw new Error()
  }

  return (
    <main>
      <CategoryWrapper data={data} categories={categories} />
    </main>
  )
}
