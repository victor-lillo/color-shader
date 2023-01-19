import { useEffect, useState } from 'react'
import { ColorObject } from 'types'

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
  const initialValue: { [key: string]: string } = { [`--${prefix}-base`]: inputColor }
  const [customProperties, setCustomProperties] = useState(initialValue)

  useEffect(() => {
    const copy: { [key: string]: string } = {}

    Object.entries(colorObj).forEach(([key, value]) => {
      value.forEach((color: string, index: number) => {
        copy[`--${prefix}-${key}-${index + 1}`] = color
      })
    })
    setCustomProperties({
      ...initialValue,
      ...copy,
    })
  }, [colorObj, prefix, inputColor])

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
