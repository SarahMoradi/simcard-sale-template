import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col
} from "reactstrap";
import "./index.css";
import DefaultCarousel from "./component/carousel";
import Services from "./component/services";
import Property from "./component/property";
import DesktopMenu from "./component/desktopMenu";
import PhoneMenu from "./component/phoneMenu";
import FooterList from "./component/footerList";

function App() {
  return (
    <div className="App">
      {/*in the phone scale*/}
      <PhoneMenu />

      {/*in the desktop scale*/}
      <DesktopMenu />

      <Row>
        <div>
          <DefaultCarousel />
        </div>
      </Row>
      <Services />
      <Property />
      <FooterList />
      <Row>
        <Col sm="12" className='bg-dark text-light d-flex justify-content-center py-3'>
            کپی رایت © - ۱۴۰۰- تیم طراح و توسعه دهنده نیترون
        </Col>
      </Row>
    </div>
  );
}

export default App;
