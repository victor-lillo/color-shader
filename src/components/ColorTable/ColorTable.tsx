import { ColorObject } from '@types'
import ColorRow from '@components/ColorRow'
import CustomProperties from '@components/CustomProperties'
import { getDarker, getLighter, getOpacities } from '@utils/colorFunctions'
import styles from './ColorTable.module.scss'

export default function ColorTable({ inputColor, quantity = 1 }: { quantity?: number; inputColor: string }) {
  const colorObj: ColorObject = {
    dark: getDarker(inputColor, quantity),
    light: getLighter(inputColor, quantity),
    opacity: getOpacities(inputColor, quantity),
  }

  const { dark, light, opacity } = colorObj
  return (
    <div className={styles.grid}>
      <div className={styles.grid__wrapper}>
        <section className={styles.grid__section}>
          <h1>Dark shades</h1>
          <ColorRow array={dark} />
        </section>
        <section className={styles.grid__section}>
          <h1>Light shades</h1>
          <div className={styles.row}>
            <ColorRow array={light} />
          </div>
        </section>
        <section className={styles.grid__section}>
          <h1>Opacity shades</h1>
          <ColorRow array={opacity} />
        </section>
        <section className={styles.grid__section}>
          <CustomProperties inputColor={inputColor} colorObj={colorObj} />
        </section>
      </div>
    </div>
  )
}
