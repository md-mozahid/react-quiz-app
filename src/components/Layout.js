import styles from '../Styles/Layout.module.css'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  )
}

export default Layout
