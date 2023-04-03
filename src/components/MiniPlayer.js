import image from '../assets/images/3.jpg'
import styles from '../Styles/MiniPlayer.module.css'

const MiniPlayer = () => {
  return (
    <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
      <span class={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
      <span class={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={image} alt="Images" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  )
}

export default MiniPlayer
