import { Article } from './clickedArticle/ClickedArticle'
import { ArticleList } from '../article/articleList/ArticleList'
import styles from './article.module.scss'


export const ArticleWrapper: React.FC = () => {
    return (
      <main className={styles.main}>
      <Article />
      <ArticleList />
      </main>
    )
  }