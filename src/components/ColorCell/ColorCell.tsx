import classnames from 'classnames-creator'
import { useState } from 'react'
import styles from './ColorCell.module.scss'
const ColorCell = ({ color, percent }: { color: string; percent?: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const timeToDissapear = 2400

  const handleClick = () => {
    navigator.clipboard.writeText(color)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, timeToDissapear)
  }

  return (
    <div className={styles.container}>
      {percent && <p className={styles.text}>{`${percent}%`}</p>}
      <div
        className={classnames(styles.cell, {
          [styles['cell--copied']]: clicked,
        })}
        style={{ '--content': `${color}`, '--delay': `${timeToDissapear / 1000}s` } as React.CSSProperties}
        onClick={handleClick}
      ></div>
      <p className={styles.text}>{color}</p>
    </div>
  )
}

export default ColorCell
