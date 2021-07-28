import "./WhyVaccinate.css";
import MainNavbar from "../navbar/MainNavbar";
import Container from "react-bootstrap/Container";
import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player';

function WhyVaccinate() {
  return (
    <div>
      <MainNavbar />
      <Container className="whyVaccinate-content">
        <h1>Here are the reasons as to why it is good to vaccinate...</h1>
       <Carousel>
  
        <Carousel.Item>
       
        <ReactPlayer url='https://youtu.be/69JKL8jRfWw'  
            height="500px"
            width="1300px"
            alt="first video"
                   />
          
        </Carousel.Item>


        <Carousel.Item>
       
       <ReactPlayer url='https://youtu.be/cVrzbws4jU8'  
       height="500px"
       width="1300px"
       alt="2nd video"
              />
     
       </Carousel.Item>


       <Carousel.Item>
       
       <ReactPlayer url='https://youtu.be/wclXZ4W7fwo'  
       height="500px"
       width="1300px"
       alt="third video"
              />
     
       </Carousel.Item>







    
      </Carousel>

      </Container>
    </div>
  );
}

export default WhyVaccinate;
