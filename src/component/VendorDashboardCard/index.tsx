import { Row, Col } from "antd";
import menoLogo from "../../assets/vendorIcon/menu.png";
import tableLogo from "../../assets/vendorIcon/table.png";
import orderLogo from "../../assets/vendorIcon/order.png";
const VendorDashboardCard = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <div className="flex items-center gap-x-4 bg-white p-4 rounded">
          <img src={menoLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Menus</p>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="flex items-center gap-x-4 bg-white p-4 rounded">
          <img src={tableLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Tables</p>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div className="flex items-center gap-x-4 bg-white p-4 rounded">
          <img src={orderLogo} alt="" />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">30</h1>
            <p className="text-24">Total Orders</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VendorDashboardCard;
