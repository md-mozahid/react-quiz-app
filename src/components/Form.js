import styles from '../Styles/Form.module.css'

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${styles.form}`} action="#" {...rest}>
      {children}
    </form>
  )
}

export default Form
