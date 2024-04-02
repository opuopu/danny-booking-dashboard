import { Col, Row } from "antd";
import orderLogo from "../../assets/vendorIcon/order.png";
import dollarLogo from "../../assets/payment.svg";
const VendorOrderCards = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <img src={orderLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Orders</p>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <img src={dollarLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Amount</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VendorOrderCards;