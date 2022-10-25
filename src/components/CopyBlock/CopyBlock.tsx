import { useEffect, useRef, useState } from 'react'

import styles from './CopyBlock.module.scss'
import { ColorObject } from '@types'
import getCssCustomProperties from '@utils/getCssCustomProperties'

export default function CopyBlock(props: { colorObj: ColorObject; inputColor: string; prefix: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const textBlock = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsCopied(false)
  }, [props.colorObj, props.inputColor, props.prefix])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (textBlock.current) {
      navigator.clipboard.writeText(textBlock.current.innerText)
      setIsCopied(true)
    }
  }

  const parsedObj = getCssCustomProperties(props)

  return (
    <section className={styles.container}>
      <button onClick={handleClick} className={styles['container__button']}>
        {isCopied ? '✅' : '📝'}
      </button>
      <div className={styles['container__body']} ref={textBlock}>
        {Object.entries(parsedObj).map(([key, value]) => {
          return (
            <div className={styles.line} key={value} style={{ '--color': value } as React.CSSProperties}>
              <span>{key}</span>: <span className={styles.line__value}>{value}</span>;
            </div>
          )
        })}
      </div>
    </section>
  )
}
