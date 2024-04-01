import { Col, Row } from "antd";
import UsersCard from "../../component/UsersCom/UsersCard";
import GuruTable from "../../component/Table";
import { memberShipData } from "../../db/memberData";
import { usersTableTheme } from "../../themes/tableThemes";
import { userData } from "../../db/userdata";
import { FaEye } from "react-icons/fa";
import GuruDrawer from "../../component/UI/Drawer";
import UserDetails from "../../component/UsersCom/UserDetails/UserDetails";
import { useState } from "react";

const Users = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen((prev) => !prev);
  };
  const onSearch = (data: string) => {
    console.log(data);
  };
  const userDataColumn = [
    {
      title: "#Sl",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Active/Inactive",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" },
      ],
    },
    {
      title: "Votes",
      dataIndex: "votes",
      key: "votes",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <FaEye
          onClick={() => setOpen((prev) => !prev)}
          className=" cursor-pointer "
        />
      ),
    },
  ];
  return (
    <div>
      <GuruDrawer title="User Details" open={open} onClose={onClose}>
        <UserDetails />
      </GuruDrawer>
      <div>
        <Row gutter={[16, 16]} align="middle">
          <Col span={16}>
            <UsersCard />
          </Col>
          <Col span={8}>
            <input
              placeholder="input search text"
              onChange={(e) => onSearch(e.target.value)}
              className="w-[300px] bg-black hover:bg-black text-white py-2 px-2 border border-gray rounded"
            />
          </Col>
        </Row>
      </div>
      <div className="mt-4  ">
        <GuruTable
          theme={usersTableTheme}
          loading={false}
          data={userData}
          column={userDataColumn}
          total={userData?.length}
          pagination={{ pageSize: 10, total: memberShipData?.length }}
        />
      </div>
    </div>
  );
};

export default Users;
