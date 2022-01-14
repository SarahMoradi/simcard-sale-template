import { Row, Col, NavLink } from "reactstrap";

import logo from "../pictures/logo.png";

const footerList = () => {
  return (
    <>
      <Row style={{ backgroundColor: "#ededed" }} className="py-4 gx-0">
        <Col sm="2"></Col>
        <Col sm="2">
          <div className="d-felx flex-column">
            <h3 style={{ fontWeight: "bold" }}>اینترنت</h3>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>بسته های اینترنتی</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>تنظیمات و فعالسازی</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>اعتبار بسته ها</p>
            </NavLink>
          </div>
        </Col>
        <Col sm="2">
          <div className="d-felx flex-column">
            <h3 style={{ fontWeight: "bold" }}>سرویس ها</h3>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>اپلیکیشن نیترون</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>مشاهده و پرداخت صورتحساب</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>خرید شارژ</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>رومینگ و مکالمات بین الملل</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>اپلیکیشن وبگردی اختصاصی</p>
            </NavLink>
          </div>
        </Col>
        <Col sm="2">
          <div className="d-felx flex-column">
            <h3 style={{ fontWeight: "bold" }}>طرح ها و برندگان</h3>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>قرعه کشی های بزرگ</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>سیم کارت دانشجویی</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>خرید شارژ</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>نیترون یار</p>
            </NavLink>
          </div>
        </Col>
        <Col sm="2">
          <div className="d-felx flex-column">
            <h3 style={{ fontWeight: "bold" }}>درباره ما</h3>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>تماس با ما</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>نمایندگی ها و مراکز خدمات</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>فرصت های همکاری</p>
            </NavLink>
            <NavLink href="#" style={{ textDecoration: "none" }}>
              <p>مناقصه و مزایده ها</p>
            </NavLink>
          </div>
        </Col>
        <Col sm="2">
          <img src={logo} alt="logo" />
        </Col>
      </Row>
    </>
  );
};
export default footerList;
