import { ReactEventHandler } from 'react'
import styles from './InputsLayout.module.scss'
import classnames from 'classnames-creator'
import { normalizeHex } from '@utils/colorFunctions'
import useWithHashStore from '@store/useWithHashStore'
import ColorCell from '@components/ColorCell'
import { ElegantSwitch } from 'react-elegant-switch'
import { COLOR_NAME, QUANTITY_NAME } from '../../contants'

const DEFAULT_COLOR = '#1e1e1e'

const InputsLayout = ({
  color,
  quantity,
  handleChange,
}: {
  color: string
  quantity: number
  handleChange: ReactEventHandler
}) => {
  // Prevents '#' value warning in input color
  const normalizedColor = color ? '#' + normalizeHex(color) : DEFAULT_COLOR

  const { withHash, toggle } = useWithHashStore()

  const handleSwitchChange = () => {
    toggle()
  }

  return (
    <div style={{ '--picked-color': normalizedColor } as React.CSSProperties} className={styles.container}>
      <div className={styles['form-group']}>
        <label className={styles.text} htmlFor={COLOR_NAME}>
          Choose a color!
        </label>
        <div className={styles['form-group__input-group']}>
          <input
            className={classnames(styles['form-group__input'], styles['form-group__input--color'])}
            onChange={handleChange}
            type='text'
            value={color}
            name={COLOR_NAME}
          />
          <input onChange={handleChange} type={COLOR_NAME} value={normalizedColor} name={COLOR_NAME} />
        </div>
      </div>
      <div className={styles['form-group']}>
        <label className={styles.text} htmlFor={QUANTITY_NAME}>
          Choose a quantity!
        </label>
        <input
          className={classnames(styles['form-group__input'], styles['form-group__input--number'])}
          onChange={handleChange}
          type='number'
          value={quantity}
          name={QUANTITY_NAME}
          min={1}
          max={99}
        />
      </div>
      <div className={styles['form-group']}>
        <p className={styles.text}>Do you want to copy the #?</p>
        <div className={styles['elegant-switch']}>
          <ElegantSwitch checked={withHash} onChange={handleSwitchChange} />
        </div>
      </div>
      {color && (
        <div className={styles['color-display']}>
          <p className={styles.text}>
            This is your <em>color</em>
          </p>
          <ColorCell color={normalizedColor} />
        </div>
      )}
    </div>
  )
}

export default InputsLayout
