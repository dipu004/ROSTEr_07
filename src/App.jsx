
import { ToastContainer} from 'react-toastify';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Auctions from './Components/Auctions/Auctions'
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react'



function App() {

  const [loadedData , setloadedData] = useState([])

  useEffect(() =>{
   fetch("Api.json")
   .then((res)=> res.json())
   .then((data) => setloadedData(data))
  },[])


  return (
    <>
       <Navbar></Navbar>
      <Header></Header>
      <Auctions loadedData={loadedData}></Auctions>
      <ToastContainer />
      <Footer></Footer>
    </>
  )
}

export default App
