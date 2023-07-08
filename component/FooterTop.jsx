import PassImg from "../images/passendger-char.png";
const FooterTop = () => {
  return (
    <div>
      {" "}
      <nav className="py-auto bg-body-tertiary border-bottom bg-secondary">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                <img src={PassImg} alt="Passendger-char" className="me-1" />
                รายงานสถิติผู้โดยสารตั้งแต่ 03/06/2023 - 06/07/2023 จำนวน
                1,901,228 เที่ยวคน
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                ค้นหาเมนูเว็บไซต์
              </a>
            </li>
            <div className="btn-group my-1">
              <button
                type="button"
                className="btn btn-light btn-md text-black-50 border-secondary"
              >
                ประวัติความเป็นมา
              </button>
              <button
                type="button"
                className="btn btn-black-50 dropdown-toggle dropdown-toggle-split border-secondary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    3
                  </a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FooterTop;
