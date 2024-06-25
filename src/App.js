import './App.css';
import Header from "./header";
import Footer from "./footer";
import LoginPage from './loginPage';
import Admin from "./adminPanel"
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




function App() {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState(false)
  const [login,setLogin] = useState(false)
  const adminChange = () => {
    setAdmin(true)
  }
  const loginChange = ()=>{
    setLogin(true)
    navigate("/login")
  }
  return (
    <>
      {admin &&
        <>
          <Admin />
        </>}
      {!admin && !login &&
        <>
          <Header opensLogin={loginChange} adminShow={adminChange}/>
          <Footer />
        </>}
        {login && 
        <>
          <LoginPage />
        </>
        }





    </>
  )
}

export default App;
