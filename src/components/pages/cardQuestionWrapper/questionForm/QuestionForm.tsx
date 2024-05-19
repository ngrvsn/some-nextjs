import styles from './questionForm.module.scss'

export const QuestionForm: React.FC = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>
        Если у вас есть какой-то вопрос, задайте его нам!
      </h2>
      <form className={styles.inputs}>
        <input
          className={styles.input}
          name={'email'}
          type={'text'}
          placeholder='Как вас зовут?'
          data-testid='login'
        />
        <input
          className={styles.input}
          name={'password'}
          type={'text'}
          placeholder='Ваш E-mail'
          data-testid='password'
        />
        <input
          className={styles.descriptionProblem}
          name={'password'}
          type={'text'}
          placeholder='Опишите вашу проблему'
          data-testid='password'
        />
        <button className={styles.button}>
          <span className={styles.buttonText}>Отправить</span>
        </button>
      </form>
    </main>
  )
}
