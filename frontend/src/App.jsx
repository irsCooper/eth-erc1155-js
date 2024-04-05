import { useEffect, useState } from "react";
import { ethers } from 'ethers'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'

import config from "./artifacts/contracts/contract.sol/Contract.json"
import Lk from "./pages/Lk";

import 'bootstrap/dist/css/bootstrap.css';

let contract = null

function App() {

  const [signer, setSigner] = useState(null)
  const [provider, setProvider] = useState(null)
  const [chain, setChain] = useState(null)

  useEffect(() => {
    const usContract = async () => {
      try {
        contract = new ethers.Contract(config.address, config.abi, provider)
      } catch (e) {
        alert(e)
      }
    }

    usContract()
  }, [signer, provider])


  window.ethereum.on('accountsChanged', () => {window.location.reload()})


  return (
    <div >
      <Menu 
        signer={''}
        setSigner={''}
        provider={''}
        setProvider={''}
        chain={''}
        setChain={''} 
      />


    



    
      <BrowserRouter>
        {provider
          ?
            <Routes>
              <Route path='/lk' element={<Lk />}></Route>
            </Routes>
          :
          <Routes>
            <Route path='*' element={<Navigate to='/' />}></Route>
          </Routes>
        }
      </BrowserRouter>

    </div>
  );
}

export default App;
