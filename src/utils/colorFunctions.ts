interface ColorRGB {
  red: number
  green: number
  blue: number
}
type ColorHEX = string

// 3Hex -> 6Hex & remove initial '#'
const normalizeHex = (color: string): ColorHEX => {
  const colorNoHash = color.replace('#', '')
  if (colorNoHash.length === 3) {
    return colorNoHash
      .split('')
      .map((char) => {
        return char + char
      })
      .join('')
  } else return colorNoHash
}
// ColorHex -> ColorRGB
const hexToRGB = (colorValue: ColorHEX): ColorRGB => {
  const hexColor = normalizeHex(colorValue)
  return {
    red: parseInt(hexColor.slice(0, 2), 16),
    green: parseInt(hexColor.slice(2, 4), 16),
    blue: parseInt(hexColor.slice(4, 6), 16),
  }
}

// Integer ->  2 character hex string
const intToHex = (rgbInt: number): string => {
  return Math.min(Math.max(Math.round(rgbInt), 0), 255)
    .toString(16)
    .padStart(2, '0')
}

// ColorRGB -> ColorHex
const rgbToHex = (rgb: ColorRGB): ColorHEX => {
  const { red, green, blue } = rgb
  return '#' + intToHex(red) + intToHex(green) + intToHex(blue)
}

// Light our color i*step (depending on the number of steps)
const rgbLight = (rgb: ColorRGB, i: number, number: number): ColorHEX => {
  const { red, green, blue } = rgb
  return rgbToHex({
    red: red + ((255 - red) * i) / number,
    green: green + ((255 - green) * i) / number,
    blue: blue + ((255 - blue) * i) / number,
  })
}
// Darken our color i*step (depending on the number of steps)
const rgbDark = (rgb: ColorRGB, i: number, number: number): ColorHEX => {
  const { red, green, blue } = rgb
  return rgbToHex({
    red: red * (1 - (1 / number) * i),
    green: green * (1 - (1 / number) * i),
    blue: blue * (1 - (1 / number) * i),
  })
}

// Percentaje -> Percentaje hex code
const percentToHex = (color: ColorHEX, i: number, number: number) => {
  const intValue = Math.round((i / number) * 255)
  const hexValue = intToHex(intValue).padStart(2, '0') // Ensuring 2 chars
  return '#' + normalizeHex(color) + hexValue.toUpperCase()
}

// Just loop [number] times, getting [number] length array
const calculate = (colorValue: ColorRGB | ColorHEX, number = 10, colorFunctionCallback: Function): string[] => {
  const colors = [...Array(number)].map((e, index) => {
    return colorFunctionCallback(colorValue, index, number)
  })
  return colors
}

const getDarker = (inputColor: ColorHEX, number: number) => {
  const color = hexToRGB(inputColor)
  return calculate(color, number, rgbDark).concat('#000000').splice(1) //Black added, initial removed
}

const getLighter = (inputColor: ColorHEX, number: number) => {
  const color = hexToRGB(inputColor)
  return calculate(color, number, rgbLight).concat('#ffffff').splice(1) //White added, initial removed
}

const getOpacities = (inputColor: ColorHEX, number: number) => {
  return calculate(inputColor, number, percentToHex).reverse()
}

export { getDarker, getLighter, getOpacities, normalizeHex }
