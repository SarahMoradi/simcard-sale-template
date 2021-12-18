import { useState } from "react";
import {
    Row,
    Col,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Badge
  } from "reactstrap";

import { HiShoppingCart } from "react-icons/hi";
import { SiNintendonetwork } from "react-icons/si";

const phoneMenu = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { href: "#home", text: " سیم کارت"},
        { href: "#card", text: " طرح و پیشنهادات" },
        { href: "#about", text: "سوالات پرتکرار" },
        { href: "#cata", text: " پشتیبانی" },
        { href: "#test", text: "درباره نیترون" },
      ];
    
      const createNavItem = ({ href, text, className }) => (
        <NavItem>
          <NavLink href={href}  className='d-flex align-items-center justify-content-center'  style={{color: '#fff', textAlign: 'center'}}>
            <Badge
              className='d-flex align-items-center justify-content-center'
              color= 'primary'
              style={{width: '150px',
              height: '30px'}}
            >
            {text}
            </Badge>
          </NavLink>
        </NavItem>
      );
    
      
    
      const toggle = () => {
        setIsOpen(!isOpen);
      };

    return(
        <>
            <div className="d-block d-md-none">
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">
            <div style={{color: '#fff'}} className='d-flex align-items-center'>
              <SiNintendonetwork size={25} style={{color: '#fff'}} />
              <div style={{marginRight: '10px', fontWeight: 'bold', fontSize :'1.5rem'}}>
              نیترون
              </div>
            </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} style={{color: '#fff', backgroundColor: '#fff'}}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar >
                {links.map(createNavItem)}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>

      <div className="d-none d-md-block header-direction">
        <Row sm="12">
          <Col sm="3" className="bg-primary text-light text-center py-1">
          <div>
          ورود | ثبت نام
          </div>
          </Col>
          <Col sm="3" className="bg-primary text-light text-center">
          
          </Col>
          <Col sm="3" className="bg-primary text-light text-center">
            
          </Col>
          <Col sm="3" className="bg-primary text-light text-center py-1">
              سبد خرید |
              <HiShoppingCart />
            
          </Col>
        </Row>
      </div>
        </>
    )
}
export default phoneMenu;