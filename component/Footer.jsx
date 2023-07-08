import TrianLogo from "../images/Frame 329-60@2x.png";
import Qrcode from "../images/qr_ios.jpg";
import Appstore from "../images/appstore-icon.png";
import Googleplay from "../images/googleplay-icon.png";
const Footer = () => {
  return (
    <>
      <div className="container Footer-2">
        <footer>
          <div className="row text-bg-dark ps-5">
            <div className="col-6 col-md-2 mb-3 ms-5 py-3">
              <h5>รถไฟฟ้ามหานคร สายสีเหลือง ลาดพร้าว - สำโรง</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    ข้อมูลบัตรโดยสาร
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    การเติมเงินบัตรแรบบิท
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    เส้นทางและอัตราค่าโดยสาร
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-4 col-md-3 mb-3 pt-4">
              <ul className="nav flex-column mt-5">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    รถไฟฟ้าที่เกี่ยวข้อง
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    โปรโมชั่น
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    ติดต่อเรา
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-light">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-2 px-5">
              <form className="py-3">
                <h5>ดาว์นโหลดแอปพลิเคชั่น THE SKYTRAINs ได้ที่</h5>
                <img
                  src={TrianLogo}
                  alt="TrianLogo"
                  height={110}
                  width={110}
                  className="mx-2"
                />
                <img
                  src={Qrcode}
                  alt="Qrcode"
                  height={110}
                  width={110}
                  className="mx-2"
                />
                <img
                  src={Appstore}
                  alt="Appstore"
                  height={40}
                  width={110}
                  className="mx-2"
                />
                <img
                  src={Googleplay}
                  alt="Googleplay"
                  height={40}
                  width={110}
                />
              </form>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
