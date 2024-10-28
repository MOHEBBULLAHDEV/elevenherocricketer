
import { useState } from 'react';
import './App.css'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './main/footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [currentBalance,setBalance] = useState(0);
    const addBalance = () =>{
        const balance = currentBalance + 1250000;
        setBalance(balance);
        toast.success("Balance Added Sucessfully")


    }

  return (
    <>
    <Header currentBalance={currentBalance} addBalance={addBalance}></Header>
    <Main currentBalance={currentBalance} setBalance={setBalance}></Main>
    <Footer></Footer>
      
        
    </>
  )
}

export default App
