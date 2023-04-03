import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import '../firebase.config'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  // loading state management
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  //signup profile
  async function signup(email, password, username) {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password)

    //update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    })

    const user = auth.currentUser // get current user
    // update current user
    setCurrentUser({
      ...user,
    })
  }

  // login function
  function login(email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout function
  function logout() {
    const auth = getAuth()
    return signOut(auth)
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
