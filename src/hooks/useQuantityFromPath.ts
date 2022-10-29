import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useQuantityFromPath = (initialValue: number) => {
  const [state, setState] = useState(initialValue)
  const router = useRouter()
  const { asPath, isReady } = router

  // Path template: /[color]/[quantity]
  const [, , quantityPath] = asPath.split('/')
  const intQuantityPath = parseInt(quantityPath)

  useEffect(() => {
    if (!isReady) return
    if (!quantityPath) return
    if (intQuantityPath === initialValue) return
    setState(intQuantityPath)
  }, [asPath])
  return [state, setState] as const
}

export default useQuantityFromPath
