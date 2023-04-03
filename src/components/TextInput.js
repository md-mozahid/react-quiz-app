import styles from '../Styles/TextInput.module.css'

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  )
}

export default TextInput
