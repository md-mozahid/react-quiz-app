import styles from '../Styles/Answers.module.css'
import Checkbox from './Checkbox'
const Answers = () => {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="Test answer" />
    </div>
  )
}

export default Answers
