import ColorCell from '@components/ColorCell'
import styles from './ColorRow.module.scss'

const ColorRow = ({ array }: { array: string[] }) => {
  return (
    <div className={styles.row}>
      {array.map((color, index, arr) => {
        const percent = (((index + 1) / arr.length) * 100).toFixed(2)
        return <ColorCell key={color} color={color} percent={percent} />
      })}
    </div>
  )
}

export default ColorRow
