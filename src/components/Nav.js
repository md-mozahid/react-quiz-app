import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-bg.png'
import styles from '../Styles/Nav.module.css'
import Account from './Account'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/Home" className={styles.brand}>
            <img src={Logo} alt="Learn with React Logo" />
            <h3 className={styles.h3}>Learn with React</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  )
}
