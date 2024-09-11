import './App.css'
import Header from './components/Header.jsx'
import { Routes , Route } from 'react-router-dom';

import Thanks from './components/Thanks.jsx';



function App() {

  return (
    <>



      <Header />
      <Routes>

          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/login' element={<h1>Login</h1>} />
          <Route path='/signup' element={<h1>Signup</h1>} />

      </Routes>
     
    </>
  )
}

export default App
