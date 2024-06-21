import './App.css';
import Header from "./header";
import Footer from "./footer";
import LoginPage from './loginPage';
import Admin from "./adminPanel"
import { useState } from 'react';



function App() {
  const [admin, setAdmin] = useState(false)
  const adminChange = () => {
    setAdmin(true)
  }
  return (
    <>
      {admin &&
        <>
          <Admin />
        </>}
      {!admin &&
        <>
          <Header adminShow={adminChange}/>
          <Footer />
        </>}





    </>
  )
}

export default App;
