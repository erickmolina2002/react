import {} from 'react'
import Home from './components/Home'
import Dados from './components/Dados'

function App() {

  return (
    <>
      <Dados nome="João" idade="25" cidade="São Paulo" />
      <Home />
    </>
  )
}

export default App
