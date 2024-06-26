import { Metadata } from 'next'
import { ArticleWrapper } from '@/components/pages/article/ArticleWrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HorseSmart',
    description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
  }
}

export default function Articles() {
  return (
    <main>
      <ArticleWrapper articleSlug={''} articleTitle={''} />
    </main>
  )
}
