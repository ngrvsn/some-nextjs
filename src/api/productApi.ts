import {
  ICategory,
  IProductQueryRequest,
  IProductQueryResponse,
  ISubCategory,
  ISubCategoryResponse
} from '@/models/product'
import { API_URL } from '@/shared/constants/urls'
import { myError } from '@/shared/utils/myError'

export const productApi = {
  async getCategories(): Promise<ICategory[]> {
    try {
      const response = await fetch(`${API_URL}category`)
      if (!response.ok) {
        myError.stringify(response)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  },
  async getSubCategoriesByCategory(categoryId: string): Promise<ISubCategoryResponse> {
    try {
      const response = await fetch(`${API_URL}subCategory/${categoryId}`)
      if (!response.ok) {
        myError.stringify(response)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  },
  async getSubCategories(): Promise<ISubCategory[]> {
    try {
      const response = await fetch(`${API_URL}subCategory`)
      if (!response.ok) {
        myError.stringify(response)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  },
  async getProducts({
    skip,
    limit,
    name,
    seller_id,
    subCategory_id
  }: IProductQueryRequest): Promise<IProductQueryResponse> {
    try {
      const response = await fetch(
        `${API_URL}products?skip=${skip}&limit=${limit}&name=${
          name ?? ''
        }&seller_id=${seller_id ?? ''}&subCategory_id=${subCategory_id ?? ''}`
      )
      if (!response.ok) {
        myError.stringify(response)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  }
}
