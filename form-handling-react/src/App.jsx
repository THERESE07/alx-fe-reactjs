import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/RegistrationForm'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationForm />
      <formikForm />
    </>
  )
}

export default App
