import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import validateHex from '@utils/validateHex'

const useStateFromPath = (initialValue: string) => {
  const [state, setState] = useState(initialValue)
  const router = useRouter()
  const { asPath, isReady } = router

  const asPathNormalized = asPath.replace('/', '')

  // With path '/' we update the state to reset it.
  // The path should be a hex
  useEffect(() => {
    if (isReady && (validateHex(asPathNormalized) || asPathNormalized === '')) setState(asPathNormalized)
  }, [asPath])
  return [state, setState] as const
}

export default useStateFromPath
