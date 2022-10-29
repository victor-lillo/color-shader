import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import validateHex from '@utils/validateHex'

const useColorFromPath = (initialValue: string) => {
  const [state, setState] = useState(initialValue)
  const router = useRouter()
  const { asPath, isReady } = router

  // Path template: /[color]/[quantity]
  const [, colorPath] = asPath.split('/')
  // With path '/' we update the state to reset it.
  // The path should be a hex
  useEffect(() => {
    if (!isReady) return
    if (!colorPath) return
    if (validateHex(colorPath) || colorPath === '') setState(colorPath)
  }, [asPath])
  return [state, setState] as const
}

export default useColorFromPath
