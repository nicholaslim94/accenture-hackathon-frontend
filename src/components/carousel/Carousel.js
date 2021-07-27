import React from "react";
import ReactPlayer from "react-player";

import { Carousel } from "react-bootstrap";
import vaccine from "../images/vaccine.jpeg";
function slide() {
  return (
    <div>
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
        {/* <Carousel.Item>
          <ReactPlayer url={'https://www.youtube.com/watch?v=ysz5S6PUM-U' } width={150} height={100} style={{text-align:"center"}}/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default slide;
