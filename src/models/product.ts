export interface ICategory extends Components.Schemas.ICategory {}
export interface IParsedCategory extends Components.Schemas.IParsedCategory {}
export interface IParsedSubCategory extends Components.Schemas.IParsedSubCategory {}
export interface ISubCategoryResponse extends Components.Schemas.IUserSubCategoryResponse {}
export interface ISubCategory extends Components.Schemas.ISubCategory {}
export interface IProductQueryRequest extends Components.Schemas.IUserProductQueryRequest {}
export interface IProductQueryResponse extends Components.Schemas.IUserProductQueryResponse {}
export interface IProduct extends Components.Schemas.IProductResponse {}
export interface IRandomProductQueryRequest extends Components.Schemas.IUserRandomProductQueryRequest {}
export interface IProductWithReviews extends Components.Schemas.IProductWithReviewResponse {}
export interface ICharacteristic extends Components.Schemas.ICharacteristic {}

export interface ICategoryPageData {
  category: IParsedCategory | null
  subCategory: IParsedSubCategory | null
}
