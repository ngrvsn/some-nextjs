'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { QUESTION_CARD_URL } from '@/shared/constants/urls'
import styles from './QuestionButton.module.scss'

export const QuestionButton: React.FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push(QUESTION_CARD_URL)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleClick}>
        Задай мне вопрос
      </button>
    </div>
  )
}
