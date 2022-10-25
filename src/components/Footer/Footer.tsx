import GitHub from '@components/icons/GitHub'
import styles from './Footer.module.scss'

const GithubProjectUrl = 'https://github.com/fentosv/' + process.env.NEXT_PUBLIC_GITHUB_PROJECT_NAME

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__text}>
            <p>
              Developed by{' '}
              <a
                className={styles.footer__text__link}
                target='_blank'
                href='https://github.com/fentosv'
                rel='noopener noreferrer'
              >
                Fentos
              </a>
            </p>
            <p>
              Any issues?{' '}
              <a
                className={styles.footer__text__link}
                target='_blank'
                href={`${GithubProjectUrl}/issues`}
                rel='noopener noreferrer'
              >
                Report them here
              </a>
            </p>
          </div>
          <a target='_blank' href={GithubProjectUrl} rel='noopener noreferrer'>
            <GitHub className={styles.logo} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
