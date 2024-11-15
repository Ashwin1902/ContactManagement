import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactsTable from './components/ContactsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <ContactForm onContactAdded={() => window.location.reload()} />
         <ContactsTable />
    </>
  )
}

export default App
