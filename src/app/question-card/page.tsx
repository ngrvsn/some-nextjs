import { Metadata } from 'next'
import { CardQuestionWrapper } from '@/components/pages/cardQuestionWrapper/CardQuestionWrapper'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'HorseSmart',
    description: 'HorseSmart — ваш идеальный маркетплейс для конного мира'
  }
}

export default function QuestionFormPage() {
  return (
    <main>
      <CardQuestionWrapper />
    </main>
  )
}
