import React from 'react'
import Link from 'next/link'

import styles from './Navbar.module.scss'
import Logo from '@components/icons/Logo'
import GitHub from '@components/icons/GitHub'

const GITHUB_PROJECT_URL = 'https://github.com/fentosv/' + process.env.NEXT_PUBLIC_GITHUB_PROJECT_NAME

function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbar__container}>
          <Link href='/' shallow>
            <a>
              <Logo className={styles.logo} />
            </a>
          </Link>
          <a target='_blank' href={GITHUB_PROJECT_URL} rel='noopener noreferrer'>
            <GitHub className={styles.logo} />
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar
