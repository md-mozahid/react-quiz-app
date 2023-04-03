import styles from '../Styles/Questions.module.css'
import Answers from './Answers'

const Questions = () => {
  return (
    <div className={styles.question}>
      <div className={styles.qTitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with React?
      </div>
      <Answers />
    </div>
  )
}

export default Questions
