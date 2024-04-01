/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ResTable from "../../component/Table";
import { data } from "../../db";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import ResModal from "../../component/Modal/Modal";
import CreateVendor from "./Vendor/CreateVendor";
import EditVentor from "./Vendor/EditVentor";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { NavLink } from "react-router-dom";
import VendorCard from "../../component/VendorCard/VendorCard";
import { vendorTableTheme } from "../../themes";

const AdminDashboard = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const handleCreateVendorModal = () => {
    setShow((prev) => !prev);
  };
  const column = [
    {
      title: "#SL",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Vendor Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Status",
      key: "status",
      render: (data: any) => {
        return data.status === "active" ? (
          <Tag color="#4C9A29" className="cursor-pointer">
            Active
          </Tag>
        ) : (
          <Tag
            color="#ff0000
          "
            className="cursor-pointer"
          >
            Inactive
          </Tag>
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
            <NavLink to={`/contest-details/${1}`}>
              <EyeOutlined className="cursor-pointer" key={index} />
            </NavLink>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <ResModal title="CREATE VENDOR" showModal={show} setShowModal={setShow}>
        <CreateVendor />
      </ResModal>
      <ResModal
        title="EDIT VENDOR"
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      >
        <EditVentor />
      </ResModal>
      <VendorCard />
      <div className="flex justify-end mb-4">
        <Button
          onClick={handleCreateVendorModal}
          className="bg-primary text-white font-500"
          icon={<PlusCircleOutlined />}
        >
          Create Vendor
        </Button>
      </div>
      <div>
        <ResTable
          theme={vendorTableTheme}
          data={data}
          column={column}
          pagination={{ total: data.length, pageSize: 10 }}
          loading={false}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
