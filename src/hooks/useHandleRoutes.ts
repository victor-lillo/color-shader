import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { DEBOUNCE_ROUTE_TIMEOUT } from '../constants'

const useHandleRoutes = ({
  color,
  quantity,
  initialColorValue,
  initialQuantityValue,
}: {
  color: string
  quantity: number
  initialColorValue: string
  initialQuantityValue: number
}) => {
  const router = useRouter()

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (color === initialColorValue) {
        router.push('/', undefined, { shallow: true })
        return
      }
      if (quantity === initialQuantityValue) {
        router.push(`/${color}`, undefined, { shallow: true })
        return
      }
      router.push(`/${color}/${quantity}`, undefined, { shallow: true })
    }, DEBOUNCE_ROUTE_TIMEOUT)
    return () => window.clearTimeout(timeout)
  }, [color, quantity])
}

export default useHandleRoutes
