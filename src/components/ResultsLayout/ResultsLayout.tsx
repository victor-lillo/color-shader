import InputsLayout from '@components/InputsLayout'
import ColorShadesLayout from '@components/ColorShadesLayout'

import validateHex from '@utils/validateHex'
import useColorFromPath from '@hooks/useColorFromPath'
import useQuantityFromPath from '@hooks/useQuantityFromPath'
import useHandleRoutes from '@hooks/useHandleRoutes'
import { COLOR_NAME, QUANTITY_NAME } from '../../constants'

const initialColorValue = ''
const initialQuantityValue = 10

export default function ResultsLayout() {
  const [color, setColor] = useColorFromPath(initialColorValue)
  const [quantity, setQuantity] = useQuantityFromPath(initialQuantityValue)
  useHandleRoutes({
    color,
    quantity,
    initialColorValue,
    initialQuantityValue,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target as HTMLInputElement
    if (name === COLOR_NAME) setColor(value)
    if (name === QUANTITY_NAME) setQuantity(parseInt(value)) // When empty -> isNaN
  }
  return (
    <>
      <article className='article'>
        <InputsLayout color={color} quantity={quantity} handleChange={handleChange} />
      </article>

      {color !== initialColorValue && validateHex(color) && (
        <article className='article'>
          <ColorShadesLayout inputColor={color} quantity={quantity} />
        </article>
      )}
    </>
  )
}
