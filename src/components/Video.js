import image from '../assets/images/3.jpg'
import styles from '../Styles/Videos.module.css'

const Video = () => {
  return (
    <a href="quiz.html">
      <div className={styles.video}>
        <img src={image} alt="images" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={styles.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  )
}

export default Video
