import { useState } from 'react'
import { ColorObject } from 'types'
import CopyBlock from '@components/CopyBlock'
import styles from './CustomProperties.module.scss'

export default function CustomProperties(props: { colorObj: ColorObject; inputColor: string }) {
  const [prefix, setPrefix] = useState('f-primary')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement
    setPrefix(value)
  }

  return (
    <section className={styles.container}>
      <h1>Custom properties</h1>
      <div className={styles['form']}>
        <label className={styles['form__label']} htmlFor='prefix'>
          Set your prefix!
        </label>
        <input className={styles['form__input']} onChange={handleChange} type='text' value={prefix} name='prefix' />
      </div>
      <CopyBlock prefix={prefix} {...props} />
    </section>
  )
}
