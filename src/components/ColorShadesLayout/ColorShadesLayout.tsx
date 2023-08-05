import styles from './ColorShadesLayout.module.scss'
import { ColorObject } from 'types'
import { getDarker, getLighter, getOpacities } from '@utils/colorFunctions'
import ColorRow from '@components/ColorRow'
import CustomProperties from '@components/CustomProperties'

export default function ColorShadesLayout({ inputColor, quantity = 1 }: { quantity?: number; inputColor: string }) {
  // As quantity could be NaN when parseInt(''), we catch the value here
  const safeQuantity = isNaN(quantity) || quantity === 0 ? 1 : quantity
  const colorObj: ColorObject = {
    dark: getDarker(inputColor, safeQuantity),
    light: getLighter(inputColor, safeQuantity),
    opacity: getOpacities(inputColor, safeQuantity),
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
