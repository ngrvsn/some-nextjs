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
          name={'Form text'}
          type={'text'}
          placeholder='Как вас зовут?'
          
        />
        <input
          className={styles.input}
          name={'Form text'}
          type={'text'}
          placeholder='Ваш E-mail'
        />
        <input
          className={styles.descriptionProblem}
          name={'Form text'}
          type={'text'}
          placeholder='Опишите вашу проблему'
        />
        <button className={styles.button}>
          <span className={styles.buttonText}>Отправить</span>
        </button>
      </form>
    </main>
  )
}
