import LogoGlobe from "../images/Globe.png";
import Arrowdown from "../images/arrow-down-black.png";
const navbarTop = () => {
  return (
    <>
      <nav className="py-auto bg-body-tertiary border-bottom bg-warning-subtle">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                หน้าแรก
              </a>
            </li>
            <li className="nav-item border-start border-dark">
              <a href="#" className="nav-link link-body-emphasis px-2">
                E-Library
              </a>
            </li>
            <li className="nav-item border-start border-dark">
              <a href="#" className="nav-link link-body-emphasis px-2">
                ข้อแนะนำเพื่อความปลอดภัย
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-body-emphasis px-2">
                ร่วมงานกับเรา
              </a>
            </li>
            <li className="nav-item border-start border-dark">
              <a href="#" className="nav-link link-body-emphasis px-2">
                ติดต่อเรา
              </a>
            </li>
            <li className="nav-item border-start border-dark">
              <a href="#" className="nav-link link-body-emphasis px-2">
                <img
                  src={LogoGlobe}
                  alt="Globe"
                  height={20}
                  width={20}
                  className="me-1"
                />
                ภาษาไทย
                <img
                  src={Arrowdown}
                  alt="arrowdown"
                  height={10}
                  width={10}
                  className="ms-2"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbarTop;
