import React from "react";
import "./Carousel.css";

import { Carousel } from "react-bootstrap";
import vaccine from "../images/vaccine.jpeg";
function slide() {
  return (
    <div className="slide">
      <Carousel>
        <Carousel.Item>
          <img
            // className="w-100"
            src={vaccine}
            height="600px"
            width="424px"
            alt="first slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            // className="w-100"
            src={vaccine}
            height="600px"
            width="424px"
            alt="second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            // className="w-100"
            src={vaccine}
            height="600px"
            width="424px"
            alt="third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default slide;
