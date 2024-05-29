import { Metadata } from 'next'
import { ArticleWrapper } from '@/components/pages/article/Article'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HorseSmart',
    description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
  }
}

export default function Articles() {
  return (
    <main>
      <ArticleWrapper />
    </main>
  )
}
