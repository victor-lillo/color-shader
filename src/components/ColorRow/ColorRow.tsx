import styles from './ColorRow.module.scss'
import ColorCell from '@components/ColorCell'

const ColorRow = ({ array }: { array: string[] }) => {
  return (
    <section className={styles.row}>
      {array.map((color, index, arr) => {
        const percent = (((index + 1) / arr.length) * 100).toFixed(2)
        // key should add index, color could be repeated.
        return <ColorCell key={color + index} color={color} percent={percent} />
      })}
    </section>
  )
}

export default ColorRow
