import { Row, Col } from "antd";
import {
  MdCancel,
  MdPendingActions,
  MdRunningWithErrors,
} from "react-icons/md";

const DashboardCard = () => {
  return (
    <Row gutter={[16, 30]}>
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
            <MdPendingActions size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">10</h1>
              <p className="text-24">Pending Request</p>
            </div>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
            <MdRunningWithErrors size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">10</h1>
              <p className="text-24">Ongoing Request</p>
            </div>
          </div>
        </div>
      </Col>
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
            <MdCancel size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">10</h1>
              <p className="text-24">Cancelled Request</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardCard;
