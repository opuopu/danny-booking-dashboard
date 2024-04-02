import { Button, Divider, Input } from "antd";
import MenuCard from "../../../component/MenuCard/MenuCard";
import MenuHeaderCards from "../../../component/MenuHeaderCards/MenuHeaderCards";
import { PlusCircleOutlined } from "@ant-design/icons";

import ResPagination from "../../../component/UI/Pagination";

const Menu = () => {
  return (
    <div>
      <MenuHeaderCards />
      <div className="flex justify-end gap-x-4 ">
        <Input.Search
          placeholder="search menu"
          className="w-[400px]"
          size="large"
        />
        <Button
          className="bg-primary text-white h-[40px] font-500"
          icon={<PlusCircleOutlined />}
        >
          Add Menu
        </Button>
      </div>
      <Divider className="bg-primary p-[1px] " />
      <div className="text-20 font-500 flex">
        <h1 className="">Showing:</h1>
        <span>40</span>
      </div>
      <div className="flex flex-wrap  justify-center mt-2">
        {new Array(49).fill(0).map((data) => (
          <MenuCard key={data} />
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <ResPagination total={40} />
      </div>
    </div>
  );
};

export default Menu;
