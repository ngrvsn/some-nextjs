'use client'
import React from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'
import sliderArrowIcon from '@/assets/icons/slider-arrow.svg'
import shareIcon from '@/assets/icons/share.svg'
import { IMAGES_URL } from '@/shared/constants/urls'
import styles from './ImagesSlider.module.scss'

interface IImageSliderProps {
  productName: string
  images: string[]
}

export const ImageSlider: React.FC<IImageSliderProps> = ({
  images,
  productName
}) => {
  const [windowWidth, setWindowWidth] = React.useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)
  const sliderRef = React.useRef<HTMLUListElement>(null)

  const isSmallListImages = images.length <= 5

  React.useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const onScrollUp = () => {
    if (windowWidth && windowWidth <= 570) {
      return sliderRef?.current?.scrollBy({ left: -150, behavior: 'smooth' })
    }
    sliderRef?.current?.scrollBy({ top: -150, behavior: 'smooth' })
  }

  const onScrollDown = () => {
    if (windowWidth && windowWidth <= 570) {
      return sliderRef?.current?.scrollBy({ left: 150, behavior: 'smooth' })
    }
    sliderRef?.current?.scrollBy({ top: 150, behavior: 'smooth' })
  }

  const copyProductLink = async () => {
    try {
      await navigator.clipboard.writeText(location.href)
      toast.success('Ссылка на товар успешно скопирована!')
    } catch (err) {
      toast.error('Ошибка при копировании ссылки на товар')
    }
  }

  return (
    <article
      className={styles.wrapper}
      style={{ alignItems: isSmallListImages ? 'flex-start' : 'center' }}
    >
      <aside className={styles.slider}>
        {!isSmallListImages && (
          <button className={styles.sliderButton} onClick={onScrollUp}>
            <Image
              src={sliderArrowIcon}
              alt='Поднятие вверх'
              className={styles.sliderButtonUpIcon}
            />
          </button>
        )}
        <ul ref={sliderRef} className={styles.imagesList}>
          {images.map((item, index) => (
            <li key={index} className={styles.imagesItemWrapper}>
              <div
                className={styles.imagesItem}
                style={{
                  borderColor:
                    selectedImageIndex === index ? '#FF7905' : '#E6E6E6'
                }}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  fill
                  src={`${IMAGES_URL}${item}`}
                  alt={productName}
                  sizes='(max-width: 428px) 100vw, 100vw'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </li>
          ))}
        </ul>
        {!isSmallListImages && (
          <button className={styles.sliderButton} onClick={onScrollDown}>
            <Image
              src={sliderArrowIcon}
              alt='Поднятие вверх'
              className={styles.sliderButtonDownIcon}
            />
          </button>
        )}
      </aside>
      <div className={styles.selectedImageContainer}>
        <div className={styles.selectedImage}>
          <div className={styles.selectedImageWrapper}>
            <Image
              fill
              src={`${IMAGES_URL}${images[selectedImageIndex]}`}
              alt={productName}
              className={styles.image}
              sizes='(max-width: 428px) 100vw, 100vw'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <button className={styles.shareButton} onClick={copyProductLink}>
          <Image src={shareIcon} alt='Поделиться товаром' />
        </button>
      </div>
    </article>
  )
}
