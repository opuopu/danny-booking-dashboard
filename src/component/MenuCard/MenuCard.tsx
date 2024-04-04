import { Col, Tag } from "antd";
import foodImage from "../../assets/food.png";
import { useState } from "react";
import ResModal from "../Modal/Modal";
import MenuDetails from "../MenuDetails/MenuDetails";
const MenuCard = () => {
  const [showDetails, setshowDetails] = useState<boolean>(false);
  return (
    <Col className="p-2">
      <ResModal showModal={showDetails} setShowModal={setshowDetails}>
        <MenuDetails />
      </ResModal>
      <div className="w-[200px] bg-[#D2D9CC] rounded pb-2 ">
        <div
          onClick={() => setshowDetails((prev) => !prev)}
          className="cursor-pointer"
        >
          <img src={foodImage} alt="" className="p-2 rounded-lg" />
        </div>
        <h1 className="text-black font-700 text-24 text-center mb-2">BURGER</h1>
        <div className="flex justify-between px-2">
          <h1 className="text-20 font-600 ">$500</h1>
          <Tag className="flex items-center bg-primary text-white font-600 cursor-pointer">
            Avilable
          </Tag>
        </div>
      </div>
    </Col>
  );
};

export default MenuCard;
