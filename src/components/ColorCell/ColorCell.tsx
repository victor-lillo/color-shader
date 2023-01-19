import classnames from 'classnames-creator'
import { useState } from 'react'
import useWithHashStore from '@store/useWithHashStore'
import styles from './ColorCell.module.scss'
const ColorCell = ({ color, percent }: { color: string; percent?: string }) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const TIME_TO_DISAPPEAR = 2400

  const { withHash } = useWithHashStore()
  const handleClick = () => {
    const copyColor = withHash ? color : color.replace('#', '')
    console.log(withHash)
    navigator.clipboard.writeText(copyColor)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, TIME_TO_DISAPPEAR)
  }

  return (
    <div className={styles.container}>
      {percent && <p className={styles.text}>{`${percent}%`}</p>}
      <div
        className={classnames(styles.cell, {
          [styles['cell--copied']]: clicked,
        })}
        style={{ '--content': `${color}`, '--delay': `${TIME_TO_DISAPPEAR / 1000}s` } as React.CSSProperties}
        onClick={handleClick}
      ></div>
      <p className={styles.text}>{color}</p>
    </div>
  )
}

export default ColorCell
