import styles from './styles.module.css'

interface AvatarProps {
  src: string
  alt: string
  text?: string
  withText?: boolean
}

export const Avatar = ({
  src,
  alt,
  text,
  withText
}: React.PropsWithChildren<AvatarProps>) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} />
      {withText && <strong>{text || alt}</strong>}
    </div>
  )
}
