import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import pic1 from "../pictures/1.png";
import pic2 from "../pictures/2.png";

const items = [
  {
    src: pic1,
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: pic2,
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
];

const Example = () => (
  <Row className="gx-0">
    <Col md="12">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Example;
