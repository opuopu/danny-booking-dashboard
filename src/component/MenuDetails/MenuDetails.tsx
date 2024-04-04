import { Divider } from "antd";
import image from "../../assets/food.png";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import ResModal from "../Modal/Modal";
import EditMenu from "../../pages/VendorDashboard/Menu/EditMenu";
const MenuDetails = () => {
  const [show, setshow] = useState<boolean>(false);
  return (
    <div>
      <ResModal title="EDIT MENU" setShowModal={setshow} showModal={show}>
        <EditMenu />
      </ResModal>
      <h1 className="text-primary font-700 text-24">Menu Details</h1>
      <Divider className="bg-primary py-[2px]" />
      <div className="flex gap-x-2 items-center">
        <img src={image} alt="" width={100} />
        <h1 className="text-20 font-600">Burger</h1>
      </div>
      <h1 className="text-24 font-600 my-2">price:$5000</h1>
      <h1 className="text-18 font-600 my-2">category:juice</h1>
      <p className="text-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex
        consectetur a reiciendis natus molestiae tempora labore praesentium
        corporis sunt nam, quibusdam incidunt quidem laudantium non numquam!
        Praesentium, dolorem soluta.
      </p>
      <div className="flex justify-between relative top-10 text-20 cursor-pointer">
        <EditOutlined onClick={() => setshow((prev) => !prev)} />
        <DeleteOutlined />
      </div>
    </div>
  );
};

export default MenuDetails;
