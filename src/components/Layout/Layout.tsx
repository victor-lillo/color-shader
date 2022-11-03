import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import styles from './Layout.module.scss'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  )
}
