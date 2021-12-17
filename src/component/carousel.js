import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import pic1 from '../1.png';
import pic2 from '../2.png';
import pic3 from '../3.png';

const items = [
  {
    src: pic1 ,
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: pic2 ,
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: pic3,
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
  <Row>
    <Col md="12">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Example;