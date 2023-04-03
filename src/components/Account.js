import { Link } from 'react-router-dom'
import styles from '../Styles/Account.module.css'

const Account = () => {
  return (
    <div className={styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/Signup">Signup</Link>
      <Link to="/Login">Login</Link>
    </div>
  )
}

export default Account
