import React from 'react'
import { getArticlePath } from '@/shared/routing/getArticlePath'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { Article } from './clickedArticle/ClickedArticle'
import { ArticleList } from './articleList/ArticleList'
import styles from './ArticleWrapper.module.scss'

interface IArticleWrapperProps {
  articleSlug: string
  articleTitle: string
}

export const ArticleWrapper: React.FC<IArticleWrapperProps> = ({
  articleSlug,
  articleTitle
}) => {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            name: 'Статьи',
            href: '/articles'
          },
          {
            name: articleTitle,
            href: getArticlePath(articleSlug)
          }
        ]}
        className={styles.breadcrumbs}
      />
      <main className={styles.main}>
        <Article />
        <ArticleList />
      </main>
    </>
  )
}
