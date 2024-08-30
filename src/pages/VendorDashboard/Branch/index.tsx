/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useState } from "react";
import ResModal from "../../../component/Modal/Modal";
import ResTable from "../../../component/Table";
import CreateBranch from "./CreateBranch";
import EditBranch from "./EditBranch";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import ResConfirm from "../../../component/UI/PopConfirm";
import { branchData } from "../../../db/branchData";
import {
  useDeleteBranchMutation,
  useGetAllBranchQuery,
} from "../../../redux/features/branch/branchApi";
import { setBranch } from "../../../redux/features/branch/branchSlice";
import { useAppDispatch } from "../../../redux/hooks";

const Branch = () => {
  const [show, setShow] = useState<boolean | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean | null>(null);
  const { data: bData, isLoading: bLoading } = useGetAllBranchQuery({});
  const [deleteBranch] = useDeleteBranchMutation();
  const dispatch = useAppDispatch();

  const handleDeleteTable = async (id: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteBranch({ id, body: { isDeleted: true } }).unwrap();
      toast.success("Branch deleted successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error: any) {
      ErrorResponse(error, toastId);
    }
  };
  const branchColumn = [
    // {
    //   title: "Branch Name",
    //   dataIndex: "name",
    //   key: "name",
    // },
    // {
    //   title: "Branch Location",
    //   dataIndex: "location",
    //   key: "location",
    // },
    {
      title: "Tables",
      dataIndex: "tables",
      key: "tables",
    },
    {
      title: "Branch ID",
      dataIndex: "_id",
      key: "_Id",
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
                dispatch(setBranch(data));
              }}
              className="cursor-pointer"
              key={index}
            />
            <ResConfirm
              title="are you sure?"
              description="this action cannot be undone"
              handleOk={() => handleDeleteTable(data?._id)}
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
      <ResModal
        width={1000}
        title="Add Branch"
        showModal={show as boolean}
        setShowModal={setShow}
      >
        <CreateBranch setShow={setShow} />
      </ResModal>
      <ResModal
        width={1000}
        title="Edit Branch"
        showModal={showEditModal as boolean}
        setShowModal={setShowEditModal}
      >
        <EditBranch setShowEditModal={setShowEditModal} />
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
          data={bData?.data}
          loading={bLoading}
          pagination={{ total: branchData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default Branch;
