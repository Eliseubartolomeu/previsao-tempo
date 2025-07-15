import './App.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Welcome } from './pages/Welcome'
import { Time } from './pages/Time'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/ver-tempo' element={<Time/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
