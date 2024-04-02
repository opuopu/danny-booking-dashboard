/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ResTable from "../../../component/Table";
import TableCards from "../../../component/TableCards/TableCards";
import { tableData } from "../../../db";
import { Button, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { vendorTableTheme } from "../../../themes/tableThemes";
import ResConfirm from "../../../component/UI/PopConfirm";
import ResModal from "../../../component/Modal/Modal";
import CreateTable from "./CreateTable";
import EditTable from "./EditTable";

const Table = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleBookedTable = (id: string, type: string) => {
    console.log(id, type);
  };
  const handleDeleteTable = async (id: string) => {
    console.log(id);
  };

  const column = [
    {
      title: "Table No",
      dataIndex: "tableNumber",
      key: "tableNumber",
    },
    {
      title: "Table Name",
      dataIndex: "tableName",
      key: "tableName",
    },
    {
      title: "Seat",
      dataIndex: "seat",
      key: "seat",
    },
    {
      title: "Status",
      key: "status",
      render: (data: any) => {
        return data.status === "free" ? (
          <ResConfirm
            title="are you sure?"
            description="this action cannot be undone"
            handleOk={() => handleBookedTable(data?.id, "booked")}
          >
            <Tag color="#4C9A29" className="cursor-pointer">
              FREE
            </Tag>
          </ResConfirm>
        ) : (
          <ResConfirm
            title="are you sure?"
            description="this action cannot be undone"
            handleOk={() => handleBookedTable(data?.id, "free")}
          >
            <Tag
              color="#ff0000
            "
              className="cursor-pointer"
            >
              BOOKED
            </Tag>
          </ResConfirm>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (data: any, index: number) => {
        return (
          <div className="flex gap-x-4">
            <EditOutlined
              onClick={() => setShowEditModal((prev) => !prev)}
              className="cursor-pointer"
              key={index}
            />

            <ResConfirm
              title="are you sure?"
              description="this action cannot be undone"
              handleOk={() => handleDeleteTable(data?.id)}
            >
              <DeleteOutlined className="cursor-pointer" key={index} />
            </ResConfirm>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <ResModal setShowModal={setShow} showModal={show} title="CREATE TABLE">
        <CreateTable />
      </ResModal>
      <ResModal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        title="EDIT TABLE"
      >
        <EditTable />
      </ResModal>
      <TableCards />
      <div className="flex justify-end mb-4">
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
          theme={vendorTableTheme}
          loading={false}
          data={tableData}
          column={column}
          pagination={{ total: tableData.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default Table;
