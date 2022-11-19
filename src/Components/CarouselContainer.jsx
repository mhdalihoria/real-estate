import Carousel from "react-bootstrap/Carousel";
import React from "react";

const CarouselContainer = () => {
  const styles = { height: "500px", objectFit: "cover", filter: "brightness(30%)" };

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="First slide"
            style={styles}
          />
          <Carousel.Caption>
            <h3>The Best Way to Buy/Rent Your Next Property</h3>
            <p>
              With the most complete source of homes for sale & real estate near
              you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="Second slide"
            style={styles}
          />

          <Carousel.Caption>
            <h3>The Best Way to Buy/Rent Your Next Property</h3>
            <p>
              With the most complete source of homes for sale & real estate near
              you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt="Third slide"
            style={styles}
          />

          <Carousel.Caption>
            <h3>The Best Way to Buy/Rent Your Next Property</h3>
            <p>
              With the most complete source of homes for sale & real estate near
              you.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
