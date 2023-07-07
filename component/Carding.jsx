import { Card, Button, Col, Row } from "react-bootstrap";
import ArrowRight from "../images/Vector.png";
import Cat from "../images/kabo-p6yH8VmGqxo-unsplash.jpg";

const Carding = () => {
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto col-lg-3 text-center">
        <h3 className="display-4 fw-normal text-body-emphasis fs-2 border-bottom border-warning">
          ข่าวสารและกิจกรรม
        </h3>
      </div>
      <Row xs={1} md={4} className="g-4 ms-5 me-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={Cat} />
              <Card.Body>
                <Card.Title className="text-body-tertiary fs-5">
                  05 กรกฎาคม 2566
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  hic assumenda facilis nisi nostrum facere? Cumque veniam nihil
                </Card.Text>
                <Button variant="btn-light btn-outline-secondary">
                  อ่านเพิ่มเติม
                  <img
                    src={ArrowRight}
                    alt="arrowdown"
                    height={10}
                    width={10}
                    className="ms-1"
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
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
    </>
  );
};

export default Carding;
