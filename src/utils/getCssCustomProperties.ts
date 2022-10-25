import { ColorObject } from '@types'

// ColorObject -> Custom properties
const getCssCustomProperties = ({
  colorObj,
  prefix,
  inputColor,
}: {
  colorObj: ColorObject
  prefix: string
  inputColor: string
}) => {
  const formatedObj: { [key: string]: string } = { [`--${prefix}-base`]: inputColor }
  Object.entries(colorObj).forEach(([key, value]) => {
    value.forEach((color: string, index: number) => {
      formatedObj[`--${prefix}-${key}-${index + 1}`] = color
    })
  })
  return formatedObj
}
export default getCssCustomProperties
