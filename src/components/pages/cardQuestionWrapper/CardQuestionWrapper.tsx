import { CompanyCard } from './companyCard/CompanyCard'
import { QuestionForm } from './questionForm/QuestionForm'
import styles from './CardQuestionWrapper.module.scss'

export const CardQuestionWrapper: React.FC = () => {
  return (
    <main className={styles.main}>
      <QuestionForm />
      <CompanyCard />
    </main>
  )
}
