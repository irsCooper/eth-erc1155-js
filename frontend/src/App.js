import { useEffect, useState } from "react";
import { ethers } from 'ethers'
import { myHeader } from './pages/Menu'

import config from "./artifacts/contracts/contract.sol/Contract.json"

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
    <div className="App">
      <myHeader />
    </div>
  );
}

export default App;
