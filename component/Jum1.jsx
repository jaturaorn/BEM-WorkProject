import ArrowRight from "../images/Vector.png";
const Jum1 = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <div className="col-lg-2 mx-auto">
          <h2 className="display-2 fw-bold text-body-emphasis fs-4 mb-4 border-bottom border-warning border-4">
            โปรโมชั่น
          </h2>
        </div>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">ติดตามโปรโมชั่นได้ในเร็วๆ นี้</p>
          <p className="lead mb-4">
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

export default Jum1;
