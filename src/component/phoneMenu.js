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
  Badge,
  Button
} from "reactstrap";

import { HiShoppingCart } from "react-icons/hi";
import { SiNintendonetwork } from "react-icons/si";
import '../index.css'
import { Link } from "react-router-dom";

const phoneMenu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#home", text: " سیم کارت" },
    { href: "#card", text: " طرح و پیشنهادات" },
    { href: "#about", text: "سوالات پرتکرار" },
    { href: "#cata", text: " پشتیبانی" },
    { href: "#test", text: "درباره نیترون" },
    { href: 'Signin', text: " ثبت نام" },
    { href: 'login', text: "ورود" },
  ];

  const createNavItem = ({ text, className }) => (
    <NavItem>
      <NavLink className='d-flex align-items-center justify-content-center' style={{ color: '#fff', textAlign: 'center' }}>
        <Badge
          className='d-flex align-items-center justify-content-center'
          color='primary'
          style={{
            width: '150px',
            height: '30px'
          }}
        >
          {text}
        </Badge>
      </NavLink>
    </NavItem>
  );



  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="d-block d-md-none">
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">
              <div style={{ color: '#fff' }} className='d-flex align-items-center'>
                <SiNintendonetwork size={25} style={{ color: '#fff' }} />
                <div style={{ marginRight: '10px', fontWeight: 'bold', fontSize: '1.5rem' }}>
                  نیترون
                </div>
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} style={{ color: '#fff', backgroundColor: '#fff' }} />
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
          <Col sm="3" className="bg-primary text-light text-center d-flex py-1 justify-content-center">

            <Link to="Login">
              <Button style={{ width: '100px' }} color="dark" className='mx-1 d-flex align-items-center justify-content-center'>
                ورود
              </Button>
            </Link>
            <Link to="Signup">
              <Button style={{ width: '100px' }} color="dark">
                ثبت نام
              </Button>
            </Link>

          </Col>
          <Col sm="6" className="bg-primary text-light text-center">
            <p className='header-animation pt-2'>⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ ⬢ ⬡ </p>
          </Col>
          <Col sm="3" className="bg-primary text-light text-center py-1">
            <Button color="dark" style={{ width: '150px' }}>
              <HiShoppingCart className='mx-2' />
              سبد خرید
            </Button>

          </Col>
        </Row>
      </div>
    </>
  )
}
export default phoneMenu;