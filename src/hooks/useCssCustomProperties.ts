import { useState } from 'react'
import { ColorObject } from '@types'

// ColorObject -> Custom properties
const useCssCustomProperties = ({
  colorObj,
  prefix,
  inputColor,
}: {
  colorObj: ColorObject
  prefix: string
  inputColor: string
}) => {
  //
  const initialValue: { [key: string]: string } = { [`--${prefix}-base`]: inputColor }
  Object.entries(colorObj).forEach(([key, value]) => {
    value.forEach((color: string, index: number) => {
      initialValue[`--${prefix}-${key}-${index + 1}`] = color
    })
  })

  const [customProperties, setCustomProperties] = useState(initialValue)
  const deleteOne = (key: string) => {
    setCustomProperties((current) => {
      const copy = { ...current }
      delete copy[key]
      return copy
    })
  }

  return { customProperties, deleteOne }
}
export default useCssCustomProperties
