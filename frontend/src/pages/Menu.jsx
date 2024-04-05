import React from "react";
import {Button, Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Menu = ({
    signer,
    setSigner,
    provider,
    setProvider,
    chain,
    setChain
}) =>  {






    return(
        <header>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
                <Navbar.Brand>Профессионалы</Navbar.Brand>

                {signer
                    ?
                        <Nav className='mr-auto'>
                            <Nav.Link><Link to='/lk'>Личный кабинет</Link></Nav.Link>
                            <Button variant="danger" className="mr-2" >Выйти</Button>
                        </Nav>
                    :
                        <Nav>
                            <Button variant="success" className="mr-2" >Войти</Button>
                        </Nav>
                }
            </Navbar>
        </header>
    )
}

export default Menu