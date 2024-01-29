
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import SignIn from './component/SignIn'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/Home' element={<Navbar/>}></Route>


      
    </Routes>
    </BrowserRouter>
 
     {/* <Navbar/> */}
  
    </>
  )
}

export default App
