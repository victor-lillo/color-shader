import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ColorPicker from '@components/ColorPicker'
import ColorTable from '@components/ColorTable'
import useStateFromPath from '@hooks/useStateFromPath'
import validateHex from '@utils/validateHex'

const initialColorValue = ''

export default function ColorModule() {
  const router = useRouter()
  const [color, setColor] = useStateFromPath(initialColorValue)
  const [quantity, setQuantity] = useState(10)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      router.push('/' + color)
    }, 300)
    return () => window.clearTimeout(timeout)
  }, [color])

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
