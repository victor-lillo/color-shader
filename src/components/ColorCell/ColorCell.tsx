import { useState } from 'react'
import styles from './ColorCell.module.scss'
import classnames from 'classnames-creator'
import useWithHashStore from '@store/useWithHashStore'
const ColorCell = ({ color, percent }: { color: string; percent?: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const TIME_TO_DISAPPEAR = 2400

  const { withHash } = useWithHashStore()

  const handleClick = () => {
    const copyColor = withHash ? color : color.replace('#', '')
    navigator.clipboard.writeText(copyColor)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, TIME_TO_DISAPPEAR)
  }

  return (
    <article className={styles.container}>
      {percent && <p className={styles.text}>{`${percent}%`}</p>}
      <div
        className={classnames(styles.cell, {
          [styles['cell--copied']]: clicked,
        })}
        style={{ '--content': `${color}`, '--delay': `${TIME_TO_DISAPPEAR / 1000}s` } as React.CSSProperties}
        onClick={handleClick}
      ></div>
      <h3 className={styles.text}>{color}</h3>
    </article>
  )
}

export default ColorCell
