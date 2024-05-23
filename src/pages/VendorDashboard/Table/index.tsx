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
// import { useAppDispatch } from "../../../redux/hooks";

import { tableData } from "../../../db";
import { TCommonTheme } from "../../../themes";
import { FaChevronDown } from "react-icons/fa6";
import { useGetTablesQuery } from "../../../redux/features/table/tableApi";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import { useAppDispatch } from "../../../redux/hooks";
import { setTable } from "../../../redux/features/table/tableSlice";

const Table = () => {
  const [show, setShow] = useState<boolean>(false);
  const [branch, setBranch] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const { data: BData } = useGetAllBranchQuery({});
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};
  if (branch) {
    query["branch"] = branch;
  }
  const { data: Tdata, isLoading, isFetching } = useGetTablesQuery(query);
  const formatedData = Tdata?.data?.map((data: any) => ({
    ...data,
    branch: data?.branch?.name,
  }));
  const items: MenuProps["items"] = BData?.data?.map((data: any) => ({
    key: data?._id, // Ensure each item has a unique key
    label: <h5>{data?.name}</h5>,
    value: data?._id,
  }));
  const onClick: MenuProps["onClick"] = ({ key }) => {
    setBranch(key);
  };
  const column = [
    {
      title: "Number of Persons",
      dataIndex: "seats",
      key: "seats",
    },
    {
      title: "Tables",
      key: "tables",
      render: (data: any, index: number) => {
        const totalTables =
          data?.table1Capacity + data?.table2Capacity + data?.table3Capacity;
        return (
          <p key={index}>
            {`${data?.table1Capacity} + ${data?.table2Capacity} + ${data?.table3Capacity} = ${totalTables}`}
          </p>
        );
      },
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
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
                dispatch(setTable(data));
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
        <CreateTable setShow={setShow} />
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
        <Dropdown menu={{ items, onClick }} placement="bottomLeft" arrow>
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
          loading={isLoading || isFetching}
          theme={TCommonTheme}
          data={formatedData}
          column={column}
          pagination={{ total: tableData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default Table;
