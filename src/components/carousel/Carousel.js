import React from 'react'
import ReactPlayer from 'react-player'

import { Carousel } from 'react-bootstrap';
import vaccine from '../images/vaccine.jpeg';
function slide() {
    return (
        <div className = "Main">
    
            <Carousel>
  <Carousel.Item>
    <img
      className="w-50"
      src={vaccine} alt="first slide"
     
    />
    
  </Carousel.Item>
  <Carousel.Item>
   
 
    {/* <ReactPlayer url={'https://www.youtube.com/watch?v=ysz5S6PUM-U' } width={150} height={100} style={{text-align:"center"}}/> */}

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>
    )
}

export default slide;
