import ColorPicker from '@components/ColorPicker'
import ColorTable from '@components/ColorTable'

import validateHex from '@utils/validateHex'
import useColorFromPath from '@hooks/useColorFromPath'
import useQuantityFromPath from '@hooks/useQuantityFromPath'
import useHandleRoutes from '@hooks/useHandleRoutes'

const initialColorValue = ''
const initialQuantityValue = 10

export default function ColorModule() {
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
    if (name === 'color') setColor(value)
    if (name === 'quantity') setQuantity(parseInt(value))
  }
  return (
    <>
      <section className='section'>
        <ColorPicker color={color} quantity={quantity} handleChange={handleChange} />
      </section>

      {color !== initialColorValue && validateHex(color) && (
        <section className='section'>
          <ColorTable inputColor={color} number={quantity} />
        </section>
      )}
    </>
  )
}
