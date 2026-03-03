
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import bgImage from "./assets/bg5.jpg"
function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
 


  })
   },[])
return !loading ? (
  <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
     style={{ backgroundImage: `url(${bgImage})` }}>

  <Header />

  <main className="flex-grow flex items-center justify-center">
    <div className="max-w-5xl w-full px-4">
      <Outlet />
    </div>
  </main>

  <Footer />
</div>
) : null;

}

export default App
