import { Row, Col, Nav, NavItem, NavLink, Badge } from "reactstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SiNintendonetwork, SiTelegram, SiFacebook } from "react-icons/si";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const DesktopMenu = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="d-none d-md-block bg-dark">
        <Row className="pt-3 pb-3 gx-0">
          <Col
            sm="2"
            className="d-flex justify-content-center align-items-center"
          >
            <div
              style={{ color: "#fff" }}
              className="d-flex align-items-center"
            >
              <SiNintendonetwork size={25} style={{ color: "#fff" }} />
              <div
                style={{
                  marginRight: "10px",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                نیترون
              </div>
            </div>
          </Col>
          <Col sm="8">
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
                        width: "110px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                      onClick={() => navigate("/")}
                    >
                      سیم کارت
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "105px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                      onClick={() => navigate("/offers")}
                    >
                      طرح و پیشنهادات
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "100px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                      onClick={() => navigate("/questions")}
                    >
                      سوالات پرتکرار
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "100px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                      onClick={() => navigate("/support")}
                    >
                      پشتیبانی
                    </Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">
                    <Badge
                      style={{
                        width: "100px",
                        height: "30px",
                        paddingTop: "8px",
                      }}
                      color="primary"
                      pill
                      onClick={() => navigate("/aboutUs")}
                    >
                      درباره نیترون
                    </Badge>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Col>
          <Col md="2" className="d-none d-sm-block p-0 m-0 pt-2">
            <div className="d-flex justify-content-center align-items-center">
              <RiInstagramFill color="#fff" size={25} className="mx-2" />
              <RiWhatsappFill color="#fff" size={25} className="mx-2" />
              <SiTelegram color="#fff" size={20} className="mx-2" />
              <SiFacebook color="#fff" size={20} className="mx-2" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DesktopMenu;
