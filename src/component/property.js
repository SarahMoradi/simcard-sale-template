import {
    Row,
    Col
  } from "reactstrap";
import {RiMessage2Fill, RiDropboxFill} from "react-icons/ri"
import {AiFillApi, AiOutlineGlobal } from "react-icons/ai";
import { BsFillCloudDownloadFill } from "react-icons/bs";

const property =() =>{
    return(
        <>
            <Row className='mt-4 d-flex justify-content-center bg-dark py-4 mx-5 mb-4 gx-0' style={{borderRadius: '13px'}}>
         <Col md="2"></Col>
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
         <Col md="2"></Col>
         <Col md="2"></Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiDropboxFill size={25} className='mb-2' />
                ارائه فضای ابری رایگان به مشترکین ویژه
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiDropboxFill size={25} className='mb-2' />
                ارائه فضای ابری رایگان به مشترکین ویژه
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiDropboxFill size={25} className='mb-2' />
                ارائه فضای ابری رایگان به مشترکین ویژه
            </div>
         </Col>
         <Col md='2' className='d-flex justify-content-center align-items-center mb-3'>
            <div className='property-center d-flex flex-column justify-content-center align-items-center px-2 text-center text-light'>
                <RiDropboxFill size={25} className='mb-2' />
                ارائه فضای ابری رایگان به مشترکین ویژه
            </div>
         </Col>
         <Col md="2"></Col>
         
     </Row>
        </>
    )
}

export default property;