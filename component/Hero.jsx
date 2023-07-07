import HeroImg from "../images/caryl.png";
const Hero = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={HeroImg}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-body-emphasis text-center lh-1 mb-3 border-bottom border-4 border-warning p-3">
              รถไฟฟ้ามหานคร สายสีเหลือง
            </h2>
            <h3>วิสัยทัศน์</h3>
            <p className="lead">
              เป็นผู้นำในการให้บริการระบบรถไฟฟ้าขนส่งมวลชนที่ดีที่สุด
            </p>
            <h3>ภารกิจ</h3>
            <p className="lead">
              มุ่งพัฒนาระบบ การดำเนินการ และบุคลากร ตลอดจนการบริหาร
              ทรัพยากรอย่างมีประสิทธิภาพ
              เพื่อให้บริการระบบรถไฟฟ้าขนส่งมวลชนเป็นระบบที่ทันสมัย รวดเร็ว
              ปลอดภัย มีประสิทธิภาพ และเชื่อถือได้
              โดยให้ผลตอบแทนที่เหมาะสมแก่ผู้ที่เกี่ยวข้องและสังคม
            </p>
            <h3>ค่านิยมร่วม</h3>
            <p className="lead">
              ยึดมั่นในบรรษัทภิบาล เชื่อมั่นในบุคลากร
              มุ่งมั่นสู่ความเป็นเลิศในการให้บริการ
              สร้างความพึงพอใจสูงสุดแก่ผู้โดยสาร
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
