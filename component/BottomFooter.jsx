const BottomFooter = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between bg-warning py-2 border-bottom">
        <p className="ps-5 ms-5">
          บริษัท อีสเทริ์น บางกอกโมโนเรล จำกัด
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        </p>
        <div className="row d-flex justify-content-end pe-5">
          <p>
            เว็บไซต์นี้แสดงผลได้ดีใน Chorme(43): Safari(9) : Firefox(16)
            <br />
            รองรับระบบสำหรับผู้พิการทางสายตา
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center bg-warning py-4 border-top">
        <p>ขอสงวนสิทธิ์ 2566 บริษัท อีสเทริ์น บางกอกโมโนเรล จำกัด</p>
      </div>
    </div>
  );
};

export default BottomFooter;
