import React from "react";
import "./Carousel.css";

import { Carousel } from "react-bootstrap";
import vaccine from "../images/vaccine.jpeg";
import vaccine2 from "../images/vaccine2.png";
import vaccine3 from "../images/vaccine3.png";

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
            src={vaccine2}
            height="600px"
            width="424px"
            alt="second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            // className="w-100"
            src={vaccine3}
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
