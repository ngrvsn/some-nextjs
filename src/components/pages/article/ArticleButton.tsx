'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ARTICLES_URL } from '@/shared/constants/urls'
import styles from './ArticleButton.module.scss'

export const ArticlesButton: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push(ARTICLES_URL)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleClick}>
        Статьи
      </button>
    </div>
  )
}
