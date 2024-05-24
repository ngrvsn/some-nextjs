import Image from 'next/image'
import classNames from 'classnames'
import styles from './ArticleList.module.scss'
import FirstArticle from '@/assets/images/first-article.png'
import SecondArticle from '@/assets/images/second-article.png'
import ThirdArticle from '@/assets/images/third-article.png'

export const ArticleList: React.FC = () => {
    return (
      <main className={styles.main}>
      <div className={styles.itemWrapper}>
      <Image
            src={FirstArticle}
            alt='Картинка новости в списке'
            className={styles.articleImage}
          />
          <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>У лошади "5 сердец", или почему она погибнет, если будет долго спать лёжа</p>
          </div>
          <div className={styles.dateWrapper}>
          <p className={styles.date}>18 апреля 2024</p>
          </div>
          </div>
      </div>
      <div  className={classNames(
              styles.itemWrapper,
              styles.itemWrapperSecond
            )}>
      <Image
            src={SecondArticle}
            alt='Картинка новости в списке'
            className={classNames(
              styles.articleImage,
              styles.articleImageSecond
            )}
          />
          <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>Кому пришло в голову измерять мощность в «лошадиных силах» и сколько это в ваттах</p>
          </div>
          <div className={styles.dateWrapper}>
          <p className={styles.date}>18 апреля 2024</p>
          </div>
          </div>
      </div>
      <div className={classNames(
              styles.itemWrapper,
              styles.itemWrapperThird
            )}>
      <Image
            src={ThirdArticle}
            alt='Картинка новости в списке'
            className={classNames(
              styles.articleImage,
              styles.articleImageThird
            )}
          />
          <div className={styles.descriptionWrapper}>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>Кто же первым, стал ездить верхом на лошади - ботайцы или ямники</p>
          </div>
          <div className={styles.dateWrapper}>
          <p className={styles.date}>18 апреля 2024</p>
          </div>
          </div>
      </div>
      </main>
    )
  }