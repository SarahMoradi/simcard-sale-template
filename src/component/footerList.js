import {
    Row,
    Col
  } from "reactstrap";
  
import logo from "../logo.png"

const footerList = () => {

    return(
        <>
            <Row style={{backgroundColor: '#ededed'}} className='py-4'>
        <Col sm="2"></Col>
        <Col sm="2">
          <div className='d-felx flex-column'>
             <h3 style={{fontWeight: 'bold'}}>اینترنت</h3>
             <a href="#" style={{textDecoration: 'none'}}>
                <p>بسته های اینترنتی</p>
             </a>
             <a href="#" style={{textDecoration: 'none'}}>
                <p>تنظیمات و فعالسازی</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>اعتبار بسته ها</p>
              </a>
          </div>
        </Col>
        <Col sm="2">
          <div className='d-felx flex-column'>
              <h3 style={{fontWeight: 'bold'}}>سرویس ها</h3>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>اپلیکیشن نیترون</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>مشاهده و پرداخت صورتحساب</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                 <p>خرید شارژ</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>رومینگ و مکالمات بین الملل</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>اپلیکیشن وبگردی اختصاصی</p>
              </a>
            </div>
        </Col>
        <Col sm="2">
            <div className='d-felx flex-column'>
              <h3 style={{fontWeight: 'bold'}}>طرح ها و برندگان</h3>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>قرعه کشی های بزرگ</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>سیم کارت دانشجویی</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>خرید شارژ</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>نیترون یار</p>
              </a>
            </div>
        </Col>
        <Col sm="2">
            <div className='d-felx flex-column'>
              <h3 style={{fontWeight: 'bold'}}>درباره ما</h3>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>تماس با ما</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>نمایندگی ها و مراکز خدمات</p>
              </a>
              <a href="#" style={{textDecoration: 'none'}}>
                <p>فرصت های همکاری</p>
              </a> 
              <a href="#" style={{textDecoration: 'none'}}>
                <p>مناقصه و مزایده ها</p>
              </a>
            </div>
        </Col>
        <Col sm="2">
          <img src={logo} alt="logo" />
        </Col>
      </Row>
        </>
    )
}
export default footerList;