import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import styles from '../Styles/Signup.module.css'
import Button from './Button'
import Checkbox from './Checkbox'
import Form from './Form'
import TextInput from './TextInput'

const SignUpForm = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const { signup } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    // do validation
    if (password !== confirmPassword) {
      return setError("Password don't match !")
    }
    try {
      setError('')
      setLoading(true)
      await signup(userName, email, password)
      navigate.push('/')
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError('Failed to signup !')
    }
  }

  return (
    <>
      <Form className={styles.signUp} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
          value={userName}
          onchange={(e) => setUserName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onchange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onchange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onchange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox
          text="I agree to the Terms &amp; Conditions"
          required
          value={agree}
          onchange={(e) => setAgree(e.target.value)}
        />

        <Button disable={loading} type="submit">
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link href="/Login">Login</Link> instead.
        </div>
      </Form>
    </>
  )
}

export default SignUpForm
