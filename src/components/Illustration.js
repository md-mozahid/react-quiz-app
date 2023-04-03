import image from '../assets/images/signup.svg'
import styles from '../Styles/Illustration.module.css'
const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <img src={image} alt="Signup" />
    </div>
  )
}

export default Illustration