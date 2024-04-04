import { Col, Row } from "antd";
import dollarLogo from "../../assets/payment.svg";

const VendorTransactionCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <img src={dollarLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">3000</h1>
            <p className="text-24">Total Payment</p>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <img src={dollarLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">300</h1>
            <p className="text-24">Total Due</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VendorTransactionCard;
