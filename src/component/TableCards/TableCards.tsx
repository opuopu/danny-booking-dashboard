import { Col, Row } from "antd";
import tableLogo from "../../assets/vendorIcon/table.png";
import dollarLogo from "../../assets/payment.svg";
const TableCards = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <img src={tableLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Tables</p>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <img src={dollarLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">3000</h1>
            <p className="text-24">Total Booked</p>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <img src={dollarLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">300</h1>
            <p className="text-24">Free Tables</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TableCards;
