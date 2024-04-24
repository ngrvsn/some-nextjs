import { ISellerShowcase } from '@/models/seller'
import { API_URL } from '@/shared/constants/urls'
import { myError } from '@/shared/utils/myError'

export const sellerApi = {
  async getSellerData(sellerId: string): Promise<ISellerShowcase> {
    try {
      const response = await fetch(`${API_URL}seller/showcase/${sellerId}`)
      if (!response.ok) {
        return myError.stringify(response)
      }
      return response.json()
    } catch (e) {
      throw e
    }
  }
}
