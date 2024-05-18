/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ResTable from "../../../component/Table";
import TableCards from "../../../component/TableCards/TableCards";

import { Button, Dropdown, MenuProps } from "antd";
import {
  // DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

// import ResConfirm from "../../../component/UI/PopConfirm";
import ResModal from "../../../component/Modal/Modal";
import CreateTable from "./CreateTable";
import EditTable from "./EditTable";
import { useAppDispatch } from "../../../redux/hooks";

import { tableData } from "../../../db";
import { TCommonTheme } from "../../../themes";
import { FaChevronDown } from "react-icons/fa6";

const Table = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a target="_blank">Branch 1</a>,
    },
    {
      key: "2",
      label: <a target="_blank">Branch 2</a>,
    },
    {
      key: "3",
      label: <a target="_blank">Branch 3</a>,
    },
  ];

  const dispatch = useAppDispatch();

  const column = [
    {
      title: "Total Tables",
      dataIndex: "totalTables",
      key: "totalTables",
    },
    {
      title: "Number of Persons",
      dataIndex: "persons",
      key: "persons",
    },
    {
      title: "Tables",
      dataIndex: "tables",
      key: "tables",
    },
    {
      title: "Branch",
      dataIndex: "Branch",
      key: "branch",
    },

    // {
    //   title: "Status",
    //   key: "status",
    //   render: (data: any) => {
    //     return data.status === "free" ? (
    //       <ResConfirm
    //         title="are you sure?"
    //         description="this action cannot be undone"
    //         handleOk={() => handleBookedTable(data?.id, "booked")}
    //       >
    //         <Tag color="#4C9A29" className="cursor-pointer">
    //           FREE
    //         </Tag>
    //       </ResConfirm>
    //     ) : (
    //       <ResConfirm
    //         title="are you sure?"
    //         description="this action cannot be undone"
    //         handleOk={() => handleBookedTable(data?.id, "free")}
    //       >
    //         <Tag
    //           color="#ff0000
    //         "
    //           className="cursor-pointer"
    //         >
    //           BOOKED
    //         </Tag>
    //       </ResConfirm>
    //     );
    //   },
    // },
    {
      title: "Action",

      key: "action",
      render: (data: any, index: number) => {
        return (
          <div className="flex gap-x-4">
            <EditOutlined
              onClick={() => {
                setShowEditModal((prev) => !prev);
              }}
              className="cursor-pointer"
              key={index}
            />

            {/* <ResConfirm
              title="are you sure?"
              description="this action cannot be undone"
              handleOk={() => handleDeleteTable(data?.id)}
            >
              <DeleteOutlined className="cursor-pointer" key={index} />
            </ResConfirm> */}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <ResModal setShowModal={setShow} showModal={show} title="CREATE TABLE">
        <CreateTable restaurantId={"1"} setShow={setShow} />
      </ResModal>
      <ResModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        title="EDIT TABLE"
      >
        <EditTable setShow={setShowEditModal} />
      </ResModal>
      <TableCards tableData={tableData} />

      <div className="flex justify-end mb-4 gap-x-4">
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Button className="border border-primary flex items-center gap-x-2">
            Select Branch <FaChevronDown />
          </Button>
        </Dropdown>
        <Button
          onClick={() => setShow((prev) => !prev)}
          className="bg-primary text-white font-500"
          icon={<PlusCircleOutlined />}
        >
          Create Table
        </Button>
      </div>

      <div className="mt-6">
        <ResTable
          theme={TCommonTheme}
          data={tableData}
          column={column}
          pagination={{ total: tableData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default Table;
