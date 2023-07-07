import CarouselImg1 from "../images/For 3 July_Web.jpg";
import CarouselImg2 from "../images/image 243(1).png";
import CarouselImg3 from "../images/image 244.png";
import CarouselImg4 from "../images/image 1 (1).png";

const Carousel = () => {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6 pointer-event"
        data-bs-ride="carousel"
        data-bs-theme="light"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className="active"
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src={CarouselImg1}
              alt="train"
              height={550}
              width="100%"
              className="img-fluid"
            />
            <div className="container"></div>
          </div>
          <div className="carousel-item active carousel-item-start">
            <img
              src={CarouselImg2}
              alt="train"
              height={550}
              width="100%"
              className="img-fluid"
            />
          </div>
          <div className="carousel-item carousel-item-next carousel-item-start">
            <img
              src={CarouselImg3}
              alt="train"
              height={550}
              width="100%"
              className="img-fluid"
            />
          </div>
          <div className="carousel-item carousel-item-next carousel-item-start">
            <img
              src={CarouselImg4}
              alt="train"
              height={550}
              width="100%"
              className="img-fluid"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
