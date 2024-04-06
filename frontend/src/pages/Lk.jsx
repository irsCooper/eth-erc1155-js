import React, { useEffect, useState } from "react";
import Nft from "./Nft";

export default function Lk({
    signer,
    contract
}) {
    const [user, setUser] = useState(null)
    const [ball, setBall] = useState(null)
    
    const [nft, setNft] = useState([])
    const [collection, setCollection] = useState([])

    useEffect(() => {
        const interval = setInterval(async () => {
            let u = await contract.connect(signer).auth()
            setUser(u[0])
            setBall(u[1].toString())

            let n = await contract.connect(signer).getUserNft()
            setNft(n)

            let c = await contract.connect(signer).getUserCollection()
            setCollection(c)
        }, 1500)

        return () => {
            clearInterval(interval)
        }
    })








    return (
        <div>
            <p>{user}</p>
            <p>{ball}</p>
            {/* <p>{nft}</p> */}


                    <div>
                        {nft.map(n => 
                            <Nft nft={n} key={n[1][1]}></Nft>
                        )}
                    </div>
            {/* {nft.length
                ?
                    <div>
                        {nft.map(n => {
                            <p>{n}</p>
                        })}
                    </div>
                :
                <div>
                    {nft.map((n) => {
                        <p>{n}</p>
                    })}
                </div>
            } */}
        </div>
    )
}