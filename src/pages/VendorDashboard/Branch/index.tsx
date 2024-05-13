/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ResModal from "../../../component/Modal/Modal";
import CreateBranch from "./CreateBranch";
import EditBranch from "./EditBranch";
import { Button } from "antd";
import ResTable from "../../../component/Table";

import { branchData } from "../../../db/branchData";
import { EditOutlined } from "@ant-design/icons";

const Branch = () => {
  const [show, setShow] = useState<boolean | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean | null>(null);
  console.log(show, showEditModal, setShow);
  const branchColumn = [
    {
      title: "Branch Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Branch Location",
      dataIndex: "location",
      key: "location",
    },
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
      <ResModal
        title="Add Branch"
        showModal={show as boolean}
        setShowModal={setShow}
      >
        <CreateBranch />
      </ResModal>
      <ResModal
        title="Edit Sub Admin"
        showModal={showEditModal as boolean}
        setShowModal={setShowEditModal}
      >
        <EditBranch />
      </ResModal>
      <Button
        className="bg-primary text-white font-500 block ms-auto"
        onClick={() => setShow((prev) => !prev)}
      >
        Create Branch
      </Button>
      <div className="mt-4">
        <ResTable
          column={branchColumn}
          data={branchData}
          pagination={{ total: branchData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default Branch;
