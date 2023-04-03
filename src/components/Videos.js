import { Link } from 'react-router-dom'
import styles from '../Styles/Videos.module.css'
import Video from './Video'

const Videos = () => {
  return (
    <div className={styles.videos}>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
    </div>
  )
}

export default Videos
