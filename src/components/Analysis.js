import styles from '../Styles/Analysis.module.css'
import Questions from './Questions'

const Analysis = () => {
  return (
    <div className={styles.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answered 5 out of 10 questions correctly</h4>
      <Questions />
    </div>
  )
}

export default Analysis
