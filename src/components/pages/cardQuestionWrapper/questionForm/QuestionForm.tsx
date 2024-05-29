'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import styles from './questionForm.module.scss'

interface IFormState {
  name: string
  email: string
  problem: string
}

export const QuestionForm: React.FC = () => {
  const initialFormState: IFormState = {
    name: '',
    email: '',
    problem: ''
  }
  const [formState, setFormState] = useState<IFormState>(initialFormState)
  const [message, setMessage] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(() => {
    const { name, email, problem } = formState
    setIsDisabled(!(name && email && problem))
  }, [formState])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const isValidEmail = validateEmail(formState.email)
    if (!isValidEmail) {
      setMessage('Некорректный e-mail')
      return
    }

    const response = await fetch('/awahawjnawejawhawh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })

    if (response.ok) {
      setMessage('Ваш вопрос отправлен')
      setFormState(initialFormState)
    } else {
      setMessage('Ошибка отправки вопроса')
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailTemplate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailTemplate.test(email)
  }

  return (
    <main className={styles.main}>
      <h2 className={styles.header}>
        Если у вас есть какой-то вопрос, задайте его нам!
      </h2>
      <form className={styles.inputs} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name='name'
          type='text'
          placeholder='Как вас зовут?'
          value={formState.name}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name='email'
          type='text'
          placeholder='Ваш E-mail'
          value={formState.email}
          onChange={handleChange}
        />
        <textarea
          className={styles.descriptionProblem}
          name='problem'
          placeholder='Опишите вашу проблему'
          value={formState.problem}
          onChange={handleChange}
        />
        <button className={styles.button} type='submit' disabled={isDisabled}>
          <span className={styles.buttonText}>Отправить</span>
        </button>
        {message && <p className={styles.messageRequest}>{message}</p>}
      </form>
    </main>
  )
}
