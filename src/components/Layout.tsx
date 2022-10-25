import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className='body'>{children}</main>
      <Footer />
    </>
  )
}
