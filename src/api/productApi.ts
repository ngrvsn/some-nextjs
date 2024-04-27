import {
  ICategory,
  IParsedCategory,
  IProduct,
  IProductQueryRequest,
  IProductQueryResponse,
  IProductWithReviews,
  IRandomProductQueryRequest,
  ISubCategory,
  ISubCategoryResponse
} from '@/models/product'
import { API_URL } from '@/shared/constants/urls'
import { myError } from '@/shared/utils/myError'

export const productApi = {
  async getCategories(
    isParsed = false
  ): Promise<IParsedCategory[] | ICategory[]> {
    try {
      const response = await fetch(`${API_URL}category?parsed=${isParsed}`, { cache: 'no-store' })
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  },
  async getSubCategoriesByCategory(
    categoryId: string
  ): Promise<ISubCategoryResponse> {
    try {
      const response = await fetch(`${API_URL}subCategory/${categoryId}`, { cache: 'no-store' })
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  },
  async getSubCategories(): Promise<ISubCategory[]> {
    try {
      const response = await fetch(`${API_URL}subCategory`, { cache: 'no-store' })
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  },
  async getProducts({
    skip,
    limit,
    name,
    seller_id,
    category_id,
    subCategory_id
  }: IProductQueryRequest): Promise<IProductQueryResponse> {
    try {
      const response = await fetch(
        `${API_URL}products?skip=${skip}&limit=${limit}&name=${
          name ?? ''
        }&seller_id=${seller_id ?? ''}&category_id=${
          category_id ?? ''
        }&subCategory_id=${subCategory_id ?? ''}`, { cache: 'no-store' }
      )
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  },
  async getRandomProducts({
    size,
    category_id
  }: IRandomProductQueryRequest): Promise<IProduct[]> {
    try {
      const response = await fetch(
        `${API_URL}products/random?size=${size}&category_id=${
          category_id ?? ''
        }`,
        { cache: 'no-store' }
      )
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  },
  async getProduct(productId: string): Promise<IProductWithReviews> {
    try {
      const response = await fetch(`${API_URL}products/${productId}`, { cache: 'no-store' })
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  }
}
