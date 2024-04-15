import {
  ICategory,
  IProductQueryRequest,
  IProductQueryResponse,
  ISubCategoryResponse
} from '@/models/product'
import { API_URL } from '@/shared/constants/urls'

export const productApi = {
  async getCategories(): Promise<ICategory[]> {
    try {
      const response = await fetch(`${API_URL}category`)
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`${response.status}?${errorText}`)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  },
  async getSubCategories(categoryId: string): Promise<ISubCategoryResponse> {
    try {
      const response = await fetch(`${API_URL}subCategory/${categoryId}`)
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`${response.status}?${errorText}`)
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
        const errorText = await response.text()
        throw new Error(`${response.status}?${errorText}`)
      }
      return await response.json()
    } catch (e) {
      throw e
    }
  }
}
