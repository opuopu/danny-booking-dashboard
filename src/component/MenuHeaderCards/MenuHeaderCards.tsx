import { Col, Row } from "antd";
import menuLogo from "../../assets/vendorIcon/menu.png";
import AvilableNowLogo from "../../assets/vendorIcon/menu.png";
const MenuHeaderCards = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <img src={menuLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30000</h1>
            <p className="text-24">Total Menu</p>
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <img src={AvilableNowLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">500</h1>
            <p className="text-24">Avilable</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default MenuHeaderCards;
