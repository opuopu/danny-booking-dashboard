import { Col, Tag } from "antd";
import foodImage from "../../assets/food.png";
import { DeleteOutlined } from "@ant-design/icons";
const MenuCard = () => {
  return (
    <Col className="p-2">
      <div className="w-[200px] bg-[#D2D9CC] rounded pb-2 ">
        <img src={foodImage} alt="" className="p-2 rounded-lg" />
        <h1 className="text-black font-700 text-24 text-center mb-2">BURGER</h1>
        <div className="flex justify-between px-2">
          <h1 className="text-20 font-600 ">$500</h1>
          <Tag className="flex items-center bg-primary text-white font-600 cursor-pointer">
            Avilable
          </Tag>
          <DeleteOutlined className="text-red text-18" />
        </div>
      </div>
    </Col>
  );
};

export default MenuCard;
