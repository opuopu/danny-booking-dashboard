/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import ResModal from "../../../component/Modal/Modal";
import AddCategory from "./AddCategory";
import ResTable from "../../../component/Table";
import { menucategoryData } from "../../../db";
import EditCategory from "./EditCategory";

const MenuCategory = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showEditModal, setshowEditModal] = useState<boolean>(false);
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Created At",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (data: any, index: number) => {
        return (
          <div className="flex gap-x-4">
            <EditOutlined
              onClick={() => setshowEditModal((prev) => !prev)}
              className="cursor-pointer"
              key={index}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <ResModal title="ADD CATEGORY" setShowModal={setShow} showModal={show}>
        <AddCategory />
      </ResModal>
      <ResModal
        title="EDIT CATEGORY"
        setShowModal={setshowEditModal}
        showModal={showEditModal}
      >
        <EditCategory />
      </ResModal>
      <div className="flex justify-end">
        <Button
          onClick={() => setShow((prev) => !prev)}
          className="bg-primary text-white h-[40px] font-500"
          icon={<PlusCircleOutlined />}
        >
          Add Category
        </Button>
      </div>
      <div className="mt-4">
        <ResTable
          data={menucategoryData}
          column={column}
          pagination={{ total: menucategoryData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default MenuCategory;
