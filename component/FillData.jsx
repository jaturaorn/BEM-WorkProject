import IMG1 from "../images/bt1.png";
import IMG2 from "../images/bt2.png";
import IMG3 from "../images/bt3.png";
import IMG4 from "../images/bt4.png";
import IMG5 from "../images/bt5.png";
import Button from "react-bootstrap/Button";

const FillData = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="row align-items-start g-lg-5 py-5">
          <div className="col-md-10 mx-auto col-lg-5">
            <h4
              className="display-3 fw-bold lh-1 mb-3 text-center fs-3
            text-white border-bottom border-warning p-3 border-4 rounded-bottom"
            >
              เส้นทางและอัตราค่าโดยสาร
            </h4>
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary bg-warning-subtle">
              <p>ต้นทาง</p>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">เลือกสถานีต้นทาง</label>
              </div>
              <p>ปลายทาง</p>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control text-dark"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingInput">เลือกสถานีปลายทาง</label>
              </div>
              <button className="w-100 btn btn-lg btn-dark" type="submit">
                เส้นทาง
              </button>
            </form>
          </div>
          <div className="col-md-10 mx-auto col-lg-5 p-5 mb-2">
            <div
              className="btn-toolbar mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-light btn-md me-3">
                  <img
                    src={IMG1}
                    alt="รูป1"
                    height={50}
                    width={50}
                    className="me-2"
                  />
                  เส้นทางและอัตราค่าโดยสาร
                </button>
              </div>
              <Button href="#" className="btn btn-light btn-md me-1 py-3">
                <img
                  src={IMG2}
                  alt="รูป1"
                  height={50}
                  width={50}
                  className="me-2"
                />
                แผนที่บริเวณ
              </Button>
            </div>
            <div
              className="btn-toolbar mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-light btn-md me-3">
                  <img
                    src={IMG3}
                    alt="รูป3"
                    height={50}
                    width={50}
                    className="me-2"
                  />
                  เวลาและความถี่การเดินทาง
                </button>
              </div>
              <Button href="#" className="btn btn-light btn-md me-1 py-3">
                <img
                  src={IMG4}
                  alt="รูป1"
                  height={50}
                  width={50}
                  className="me-2"
                />
                lostproperty
              </Button>
            </div>
            <div
              className="btn-toolbar mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-light btn-lg">
                  <img
                    src={IMG5}
                    alt="รูป3"
                    height={50}
                    width={50}
                    className="me-2"
                  />
                  ที่จอดรถ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillData;
