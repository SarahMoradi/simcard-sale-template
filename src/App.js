import "bootstrap/dist/css/bootstrap.css";
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
import "./index.css";
import {RiMessage2Fill, RiDropboxFill} from "react-icons/ri"
import {AiFillApi, AiOutlineGlobal } from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { SiNintendonetwork } from "react-icons/si";
import DefaultCarousel from "./component/carousel";

function App() {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#card", text: "Product" },
    { href: "#about", text: "About" },
    { href: "#cata", text: "Categories" },
    { href: "#test", text: "Blogs" },
    { href: "#test2", text: "News" },
    { href: "#busns", text: "Adds", className: "btnadd" },
    { href: "/login", text: "LOGIN" },
  ];

  const createNavItem = ({ href, text, className }) => (
    <NavItem>
      <NavLink href={href} className={className}>
        {text}
      </NavLink>
    </NavItem>
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <div className="d-block d-md-none">
        {/*in the phone scale*/}
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
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

         {/*in the desktop scale*/}
      <div
        className="d-none d-md-block bg-dark"
      >
        
           <Row className="pt-3 pb-3">
          <Col
            sm="2"
            className="d-flex justify-content-center align-items-center"
          >
            <div style={{color: '#fff'}} className='d-flex align-items-center'>
              <SiNintendonetwork size={25} style={{color: '#fff'}} />
              <div style={{marginRight: '10px', fontWeight: 'bold', fontSize :'1.5rem'}}>
              نیترون
              </div>
            </div>
          </Col>
          <Col sm="10">
            <div>
              <Nav>
                <NavItem>
                  <NavLink
                    style={{ color: "#fff", fontWeight: "bold" }}
                    active
                    href="#"
                  >
                    <Badge
                      style={{
                        width: "90px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                    >
                      سیم کارت
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "90px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                    >
                      طرح و پیشنهادات
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "90px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                    >
                      سوالات پرتکرار
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "90px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                    >
                      پشتیبانی
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "90px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                    >
                      درباره نیترون
                    </Badge>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
        </Row>
      </div>
     <Row>
         <div>
             <DefaultCarousel/>
         </div>
     </Row>
     <Row>
        <Col sm='12'>
            <div>
                <h4 className='text-center mt-3' style={{fontWeight: 'bold'}}>
                نیترون اولین خدمات دهنده دیتا و سرویس های برون و درون کشوری
                </h4>
            </div>
            <div>
                <p className='text-center'>
                    اولین ارائه دهنده سیم کارت های کاربردی در مسافرت های خارج از کشور 
                </p>
            </div>
        </Col>
     </Row>
     <Row className='mt-4 d-flex justify-content-center mb-5 bg-dark pt-3'>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
             <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <AiFillApi size={25} className='mb-2' />
                 اعتبارسنجی کاربر برای ورود آسان
                 
             </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
             <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <BsFillCloudDownloadFill size={25} className='mb-2' />
                 دسترسی به خدمات ابری رایگان
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <AiOutlineGlobal size={25} className='mb-2' />
                 دسترسی نامحدود به اینترنت
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiMessage2Fill size={25} className='mb-2' />
                 ارسال پیامک از سیم کارت به مشترکین
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiDropboxFill size={25} className='mb-2' />
                ارائه فضای ابری رایگان به مشترکین ویژه
            </div>
         </Col>
     </Row>
    </div>
  );
}

export default App;
