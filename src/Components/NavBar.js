import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,Badge} from 'reactstrap';
import '../Style/NavBar.css'

function NavBar(props,args) {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

//   let newProducts = props.shopProducts.filter((shopProd)=>{
//     return shopProd.count > 0 
//   })

//   console.log(props.shopProducts);
// console.log(newProducts);

  return (
    <div>
        <Navbar expand='sm'  color='' className='color' container={true} {...args}>
        <NavbarToggler onClick={toggle}  className='bg-info mb-2 ' />
            <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
                <NavItem className="me-4 text-docration-none " >
                    <Link to='/' className="text-decoration-none text-info " >Home</Link>
                </NavItem>
                <NavItem className='w '>
                    <Link to='/shop' className="text-decoration-none text-info">shop</Link>
                </NavItem>
            </Nav>
          
            <NavbarBrand className="ms-auto text-info">
                <h3>Lusion</h3>
            </NavbarBrand>
            
            <Nav className="ms-auto r" navbar>


                {/* <Link to='/Cart' className='b'>
                <FaCartPlus className='fs-4 text-info b'/>
                </Link> */}

                {/*<Link to='/Cart' className='s'>
                    <FaCartPlus className='fs-4 text-info b'/>
                        </Link>
                    </Nav>
                <Badge color="danger" pill className='m'>0</Badge> */}



                <Link to='/Cart' className='d-flex flex-column'>
                    {/* <Badge color={newProducts.length >0 ? 'success' : "danger"} pill className='mg text-center'>{newProducts.length}</Badge> */}
                    <Badge color={props.showLength() >0 ? 'success' : "danger"} pill className='mg text-center'>{props.showLength() }</Badge>
                    <FaCartPlus className='fs-4 text-info'/>
                </Link>
            </Nav>


               

            </Collapse>
      </Navbar>
    
    </div>
  )
}


export default NavBar;