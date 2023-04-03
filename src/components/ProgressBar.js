import { Link } from 'react-router-dom'
import styles from '../Styles/ProgressBar.module.css'
import Button from './Button'

const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Complete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: '20%' }}></div>
        </div>
      </div>
      <Link to="/Result">
        <Button className={styles.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  )
}

export default ProgressBar
