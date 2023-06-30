import React from 'react'
import {PersonCircle, BoxSeam, Bank, BoxArrowRight, List} from 'react-bootstrap-icons'
import './navigationBar.css'
import {Button, Dropdown, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <div className='navigationbar__container whiteBox d-none d-md-inline-flex'>
                <div className='navigationbar__icon_container'>
                    <PersonCircle className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar__icon_container'>
                    <BoxSeam className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar__icon_container'>
                    <Bank className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar_verticalLine'></div>
                <div className='navigationbar__icon_container'>
                    <BoxArrowRight className='navigationbar__icon' size={25}/>
                </div>
            </div>

            <Dropdown className="d-md-none" >
                <Dropdown.Toggle className="navigationbar__dropDownToggle">
                    <List className="navigationbar__icon" size={25}/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Inventory</Dropdown.Item>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Market</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}

export default NavigationBar