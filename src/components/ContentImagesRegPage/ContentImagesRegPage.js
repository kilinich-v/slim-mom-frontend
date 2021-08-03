import { useEffect, useState } from 'react'
import styles from './ContentImagesRegPage.module.scss'

export default function ContentImagesRegPage() {
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(true)
  }, [])

  return (
    <div className={styles.contentContainer}>
      <div
        className={styles.Green}
        style={{
          transform: value ? 'translateY(0)' : 'translateY(-101%)',
          opacity: value ? '1' : '0',
        }}
      ></div>
      <div
        className={styles.Banana}
        style={{
          transform: value ? 'translateX(0)' : 'translateX(101%)',
          opacity: value ? '1' : '0',
        }}
      ></div>
      <div
        className={styles.Strawberry}
        style={{
          transform: value ? 'translateX(0)' : 'translateX(101%)',
          opacity: value ? '1' : '0',
        }}
      ></div>
      <div
        className={styles.DecoreLaptop}
        style={{
          opacity: value ? '1' : '0',
        }}
      ></div>
    </div>
  )
}
