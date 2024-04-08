import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from 'react-bootstrap'

export default function Collection(props) {

    const [show, setShow] = useState(false);
    const [_nft, set_Nft] = useState({name: '', desc: '', file: '', price: 0, amount: 0})

    const file = (e) => {
        const file = e.target.files[0]
        set_Nft({..._nft, file: file.name})
    }

    const sNft = async (e) => {
        e.preventDefault()

        try {
            const res = await props.contract.connect(props.signer).setNft(_nft.name, _nft.desc, _nft.file, _nft.price, _nft.amount, true) 
            console.log(res)
            alert('Подождите ответа блокчейна, результат скоро отобразится')
        } catch(err) {
            console.log(err)
            alert(err)
        }
    }

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
            
            <Button onClick={() => setShow(true)}>создать nft</Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body >
                    <Form className="mb-3" onSubmit={sNft} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                        <h1 style={{textAlign: 'center'}}>Введите информацию о nft</h1>
                        <Form.Group>
                            <Form.Control value={_nft.name} onChange={e => set_Nft({..._nft, name: e.target.value})} style={{width: '280px'}} type="text" placeholder="введите название" required/>
                            <Form.Control value={_nft.desc} onChange={e => set_Nft({..._nft, desc: e.target.value})} style={{width: '280px'}} type="text" placeholder="введите описание" required/>

                            <Form.Control value={_nft.price} onChange={e => set_Nft({..._nft, price: e.target.value})} type="number" min={1} title="введите стоимость" required/>
                            <Form.Control value={_nft.amount} onChange={e => set_Nft({..._nft, amount: e.target.value})} type="number" min={1} title="введите количество" required/>
                            <input type="file" required onChange={file}/>
                        </Form.Group>
                        <Button style={{marginLeft: '10px', marginTop: '3%' ,width: '150px'}} variant="primary" type="submit">создать</Button>
                    </Form> 
                </Modal.Body>
            </Modal>
        </div>
    )
}