import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthProvider from '../contexts/AuthContext'
import '../Styles/App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Quiz from './Pages/Quiz'
import Result from './Pages/Result'
import Signup from './Pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Quiz" element={<Quiz />} />
              <Route path="/Result" element={<Result />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
