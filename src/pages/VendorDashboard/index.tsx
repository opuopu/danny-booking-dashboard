/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row, Col, Space, Button } from "antd";
import VendorDashboardCard from "../../component/VendorDashboardCard";
import VendorChart from "../../component/VendorChart/VendorChart";
import DropDown from "../../component/UI/DropDown";
import { DownOutlined } from "@ant-design/icons";
import avg from "../../assets/avg.png";
import SellingItems from "../../component/SellingItem/SellingItems";
import { useGetAllMenuQuery } from "../../redux/features/menu/menuApi";
import { NavLink } from "react-router-dom";
const VendorDashboard = () => {
  const { data: menuData } = useGetAllMenuQuery({});
  const items = [{ key: 1, label: 2023, value: 2023 }];
  return (
    <Row gutter={[16, 16]}>
      <Col span={14}>
        <VendorDashboardCard />
        <div className="bg-white mt-4 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black font-600 text-32">Chart Orders</h1>
              <p className="text-18 text-deepGray">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <DropDown items={items}>
              <Space className="text-black font-500">
                <p>Select Year</p>
                <DownOutlined />
              </Space>
            </DropDown>
          </div>
          {/* section 2 */}
          <div className="flex gap-x-10 my-6">
            <div>
              <div className="flex gap-x-2 items-center ">
                <img src={avg} alt="" />
                <h1 className="text-32 font-700">250k</h1>
              </div>
              <p className="text-deepGray text-18">Total Sales</p>
            </div>
            <div>
              <div className="flex gap-x-2 items-center ">
                <img src={avg} alt="" />
                <h1 className="text-32 font-700">10k</h1>
              </div>
              <p className="text-deepGray text-18">Today Sales</p>
            </div>
          </div>
          <VendorChart />
        </div>
      </Col>
      <Col span={10}>
        <div className="bg-white px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-24 font-600 ">Menu</h1>
            <NavLink to={`/vendor/menu`}>
              <Button className="bg-primary text-white font-500">
                See All
              </Button>
            </NavLink>
          </div>
          <p className="text-deepGray my-2 text-18">Latest Menu</p>
          <div
            className="overflow-y-auto pe-4"
            style={{ maxHeight: "calc(100vh - 270px)" }}
          >
            {menuData?.data?.map((data: any, index: number) => (
              <SellingItems key={index} data={data} />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default VendorDashboard;
