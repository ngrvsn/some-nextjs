import Image from 'next/image'
import classNames from 'classnames'
import googlePlayIcon from '@/assets/icons/google-play.svg'
import appleIcon from '@/assets/icons/apple.svg'
import { DOWNLOAD_ANDROID_APP_LINK, DOWNLOAD_IOS_APP_LINK } from '@/shared/constants/urls'
import styles from './DownloadAppLink.module.scss'

interface IDownloadAppLinkProps {
  type: 'android' | 'ios'
  wrapperClassName: string
  imageClassName: string
}

export const DownloadAppLink: React.FC<IDownloadAppLinkProps> = ({
  type,
  wrapperClassName,
  imageClassName
}) => {
  const isAndroidType = type === 'android'
  return (
    <a href={isAndroidType ? DOWNLOAD_ANDROID_APP_LINK : DOWNLOAD_IOS_APP_LINK} target='_blank' className={classNames(styles.wrapper, wrapperClassName)}>
      <Image
        src={isAndroidType ? googlePlayIcon : appleIcon}
        alt={isAndroidType ? 'Скачать в Google Play' : 'Скачать в App Store'}
        className={imageClassName}
      />
    </a>
  )
}
