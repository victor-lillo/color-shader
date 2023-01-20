import { useEffect, useRef, useState } from 'react'
import { ColorObject } from 'types'
import useCssCustomProperties from '@hooks/useCssCustomProperties'
import styles from './CopyBlock.module.scss'

export default function CopyBlock(props: { colorObj: ColorObject; inputColor: string; prefix: string }) {
  const textBlock = useRef<HTMLDivElement>(null)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const { customProperties, deleteOne } = useCssCustomProperties(props)

  useEffect(() => {
    setIsCopied(false)
  }, [props.colorObj, props.inputColor, props.prefix])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (textBlock.current) {
      navigator.clipboard.writeText(textBlock.current.innerText.replaceAll('❌', ''))
      setIsCopied(true)
    }
  }

  const handleDelete = (key: string) => {
    deleteOne(key)
    setIsCopied(false)
  }

  return (
    <section className={styles.container}>
      <button
        onClick={handleClick}
        title={isCopied ? 'Already copied!' : 'Copy all the custom properties'}
        className={styles['container__button']}
      >
        {isCopied ? '✅' : '📝'}
      </button>
      <div className={styles['container__body']} ref={textBlock}>
        {Object.entries(customProperties).map(([key, value]) => {
          const displayValue = value.startsWith('#') ? value : '#' + value
          return (
            <div className={styles.line} key={key} style={{ '--color': displayValue } as React.CSSProperties}>
              <span>{key}</span>: <span className={styles.line__value}>{displayValue}</span>;
              <button title='Delete this line' onClick={() => handleDelete(key)} className={styles.line__button}>
                ❌
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
