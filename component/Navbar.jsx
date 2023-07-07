import Logo from "../images/BEM.png";
import Arrowdown from "../images/arrow-down-black.png";
const navbar = () => {
  return (
    <>
      <header className="p-1 mb-auto border-bottom bg-warning ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <img
                src={Logo}
                alt="BEM"
                height="55px"
                width="55px"
                className="ms-4"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-5">
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  เกี่ยวกับเรา
                  <img
                    src={Arrowdown}
                    alt="arrowdown"
                    height={10}
                    width={10}
                    className="ms-2"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  ข้อมูลบัตรโดยสาร
                  <img
                    src={Arrowdown}
                    alt="arrowdown"
                    height={10}
                    width={10}
                    className="ms-2"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  ข้อมูลการใช้บริการ
                  <img
                    src={Arrowdown}
                    alt="arrowdown"
                    height={10}
                    width={10}
                    className="ms-2"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  ธุรกิจและการบริการ
                  <img
                    src={Arrowdown}
                    alt="arrowdown"
                    height={10}
                    width={10}
                    className="ms-2"
                  />
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  ข่าวสารและกิจกรรม
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  โปรโมชั่น
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  คำถามที่พบบ่อย
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default navbar;
