import FbImg from "../images/fb.jpg";
import LineImg from "../images/Line.png";
import TwImg from "../images/tw.jpg";
import YtImg from "../images/yt.jpg";
const Contact = () => {
  return (
    <>
      <div className="container px-4 py-5">
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis border-bottom border-warning border-4">
              ติดต่อสอบถาม และติดตามข่าวสาร
            </h2>
            <p className="text-body-secondary">
              ศูนย์ลูกค้าสัมพันธ์ ติดต่อ 0 2617 6111 ทุกวันเวลา : 06.00 - 24.00
              น.
            </p>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-4 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                  <img
                    src={FbImg}
                    alt="Facebook-contact"
                    height={65}
                    width={65}
                  />
                </div>
                <p className="text-body-secondary">รถไฟฟ้ามหานคร สายสีเหลือง</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                  <img
                    src={LineImg}
                    alt="Line-contact"
                    height={65}
                    width={65}
                  />
                </div>
                <p className="text-body-secondary">YellowLineofficial</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                  <img src={TwImg} alt="Line-contact" height={65} width={65} />
                </div>
                <p className="text-body-secondary">Pinkyellowline</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                  <img src={YtImg} alt="Line-contact" height={65} width={65} />
                </div>
                <p className="text-body-secondary">@YellowLine_ebm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
