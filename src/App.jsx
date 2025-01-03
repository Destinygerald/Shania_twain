import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Page.jsx'


function App() {


  return (
    
      <div className="app">

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<Main />} />
        </Routes>
      </div>
  )
}

export default App
