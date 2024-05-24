import Image from 'next/image'
import ClickedArticle from '@/assets/images/clicked-article.png'
import styles from './ClickedArticle.module.scss';


export const Article: React.FC = () => {
    return (
      <main className={styles.main}>
      <div className={styles.titleBlock}>
        <p className={styles.date}> 18 апреля 2024</p>
        <div className={styles.wrapperArticleTitle}>
            <p className={styles.articleTitle}>Основы правильного содержания и ухода за лошадьми</p>
        </div>
        <div className={styles.wrapperArticleText}>
            <p className={styles.articleText}>Путешествие Бена Махера в мир конкура началось в возрасте 8 лет. И чем дольше он занимался, тем сильнее становилась мечта стать профессионалом. Еще будучи подростком, он сделал карьеру в конкуре своим главным приоритетом и после окончания школы переехал в Швейцарию. В 2004 году он стал членом британской команды на молодежном чемпионате Европы, где команда завоевала золотые медали. Это положило начало его карьере.</p>
        </div>
      </div>
      <div className={styles.subtitleBlock}>
      <div className={styles.wrapperArticleSubtitle}>
      <p className={styles.articleSubtitle}>Подзаголовок</p>
      </div>
      <div className={styles.wrapperSubtitleText}>Путешествие Бена Махера в мир конкура началось в возрасте 8 лет. И чем дольше он занимался, тем сильнее становилась мечта стать профессионалом. Еще будучи подростком, он сделал карьеру в конкуре своим главным приоритетом и после окончания школы переехал в Швейцарию. В 2004 году он стал членом британской команды на молодежном чемпионате Европы, где команда завоевала золотые медали. Это положило начало его карьере.</div>
      </div>
      <div className={styles.imageBlock}>
      <div className={styles.imageWrapper}>
      <Image
            src={ClickedArticle}
            alt='Картинка выбранной новости'
            className={styles.mainImage}
          />
        </div>
        <div className={styles.imageDescriptionWrapper}>
            <p className={styles.imageDescriptionText}>На этом фото изображена фигуристая лошадь</p>
        </div>
      </div>
      <div className={styles.footerArticle}>
        <p className={styles.footerArticleText}>Путешествие Бена Махера в мир конкура началось в возрасте 8 лет. И чем дольше он занимался, тем сильнее становилась мечта стать профессионалом. Еще будучи подростком, он сделал карьеру в конкуре своим главным приоритетом и после окончания школы переехал в Швейцарию. В 2004 году он стал членом британской команды на молодежном чемпионате Европы, где команда завоевала золотые медали. Это положило начало его карьере.</p>
      </div>
      </main>
    )
  }