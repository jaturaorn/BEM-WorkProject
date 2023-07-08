import { Carousel, Card, Stack, Button } from "react-bootstrap";
import ArrowRight from "../images/Vector.png";
const CardCarousel = () => {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
    { _id: 5, text: "mno" },
    { _id: 6, text: "pqr" },
  ];
  return (
    <>
      <div className="container-fluid bg-img">
        <div className=" pb-md-4 mx-auto col-lg-2 text-center">
          <h1 className="display-3 text-center fw-bold fs-2 my-5 border-bottom border-4 border-dark">
            E-Library
          </h1>
        </div>
        <Carousel style={{ height: 300 }}>
          {reviews.map((e, i) => (
            <Carousel.Item style={{ height: 275 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card style={{ width: "25rem" }} className="card-bg1">
                  <Card.Body>
                    <Card.Title className="fw-bold text-warning opacity-75 mb-4">
                      ระบบอาณัติสัญญาณ
                    </Card.Title>
                    <Button variant="btn-light btn-outline-dark mt-5 btn-light">
                      เพิ่มเติม
                    </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem" }} className="card-bg2">
                  <Card.Body>
                    <Card.Title className="fw-bold text-warning opacity-75 mb-4">
                      ระบบซ่อมบำรุง
                    </Card.Title>
                    <Button variant="btn-light btn-outline-dark mt-5 btn-light">
                      เพิ่มเติม
                    </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: "25rem" }} className="card-bg3">
                  <Card.Body>
                    <Card.Title className="fw-bold text-warning opacity-50 mb-4">
                      ระบบบัตรโดยสาร
                    </Card.Title>
                    <Button variant="btn-light btn-outline-dark mt-5 btn-light">
                      เพิ่มเติม
                    </Button>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="p-3 pb-md-4 mx-auto mt-2">
          <p className="lead mb-4 text-center">
            ดูเพิ่มเติม
            <img
              src={ArrowRight}
              alt="arrowdown"
              height={10}
              width={10}
              className="ms-2"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
