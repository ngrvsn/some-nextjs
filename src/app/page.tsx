import { Categories } from '@/components/pages//main/Categories/Categories'
import { Promo } from '@/components/pages/main/Promo/Promo'
import { SecondPromo } from '@/components/pages/main/SecondPromo/SecondPromo'
import { ProductList } from '@/components/product/ProductsList/ProductList'
import { CardQuestionWrapper } from '@/components/pages/cardQuestionWrapper/CardQuestionWrapper'
import { ArticleWrapper } from '@/components/pages/article/article'

export default function Main() {
  return (
    <main>
      
      <CardQuestionWrapper />
      <ArticleWrapper />
      <Promo />
      <Categories />
      <ProductList title='Успей купить!' size={10} />
    
      <SecondPromo />
      <ProductList title='Товары по акции' size={5} />
    </main>
  )
}
