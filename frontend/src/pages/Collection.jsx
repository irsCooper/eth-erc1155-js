import React from "react";

export default function Collection(props) {

    // const set = async (e) => {
    //     e.preventDefault()

    //     try {
    //         const c = props.contract
    //         const s = props.signer
    
    //         const res = await c.connect(s).sellNft(Number(props.nft[1][0]), price)
    //         console.log(price, Number(props.nft[1][0]), res)
    //     } catch(err) {
    //         alert(err)
    //     }
    // }

    return (
        <div>
            <h5>Название: {props.col[1]}</h5>
            <p>Описание: {props.col[2]}</p>
            {props.col[3].length
                ?
                    <p>id nft в коллекции: {props.col[3]}</p>
                :
                    <p>Пока тут пусто, давайте добавим nft!</p>
            }
        </div>
    )
}