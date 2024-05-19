/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResTable from "../../../component/Table";

import { subAdminData } from "../../../db";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import ResModal from "../../../component/Modal/Modal";
import CreateSubAdmin from "./CreateSubAdmin";
import EditSubAdmin from "./EditSubAdmin";
import { useGetAllUserQuery } from "../../../redux/features/auth/authApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setSubAdminDetails } from "../../../redux/features/auth/authSlice";

const SubAdmin = () => {
  const { data: sData, isLoading: Sloading } = useGetAllUserQuery({
    role: "sub_admin",
  });
  const [show, setShow] = useState<boolean | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean | null>(null);

  const dispatch = useAppDispatch();
  const subAdminColumn = [
    {
      title: "Worker Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Worker Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
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
                dispatch(setSubAdminDetails(data));
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
        title="Create Sub Admin"
        showModal={show as boolean}
        setShowModal={setShow}
      >
        <CreateSubAdmin setShow={setShow} />
      </ResModal>
      <ResModal
        title="Edit Sub Admin"
        showModal={showEditModal as boolean}
        setShowModal={setShowEditModal}
      >
        <EditSubAdmin setShowEditModal={setShowEditModal} />
      </ResModal>
      <Button
        className="bg-primary text-white font-500 block ms-auto"
        onClick={() => setShow((prev) => !prev)}
      >
        Create Sub Admin
      </Button>
      <div className="mt-4">
        <ResTable
          loading={Sloading}
          column={subAdminColumn}
          data={sData?.data}
          pagination={{ total: subAdminData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default SubAdmin;
