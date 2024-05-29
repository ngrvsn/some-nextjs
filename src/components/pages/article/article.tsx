import { Article } from './clickedArticle/ClickedArticle'
import { ArticleList } from './articleList/ArticleList'
import styles from './Article.module.scss'

export const ArticleWrapper: React.FC = () => {
  return (
    <main className={styles.main}>
      <Article />
      <ArticleList />
    </main>
  )
}
