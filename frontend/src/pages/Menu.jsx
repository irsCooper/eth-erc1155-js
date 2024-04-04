import React from "react";
import {Button, Navbar, Nav} from 'react-bootstrap'

export default function myHeader({
    signer,
    setSigner,
    provider,
    setProvider,
    chain,
    setChain
}) {

    return(
        <div>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark">
                <Navbar.Brand>Professional</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link>Info</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Log In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}