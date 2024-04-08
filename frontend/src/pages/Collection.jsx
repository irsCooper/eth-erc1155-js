import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap'
import {} from 'react-router-dom'

export default function Collection(props) {

    const router = 

    return (
        <div>
            <h5>id коллекции: {props.col[0].toString()}</h5>
            <p>Название: {props.col[1]}</p>
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