/* eslint-disable @typescript-eslint/no-explicit-any */

import SubAdminDashboardCard from "../../component/SubAdminDashboardCard/SubAdminDashboardCard";
import ResTable from "../../component/Table";
import { TUser, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useFindAllBrancesBookingQuery } from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/hooks";

const SubAdminDashboard = () => {
  const user: TUser | null = useAppSelector(useCurrentUser);
  const {
    data: RData,
    isLoading,
    isFetching,
  } = useFindAllBrancesBookingQuery({ branch: user?.branch });
  const dashboardBookingColumn = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customer Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Person",
      dataIndex: "seats",
      key: "seats",
    },
  ];
  return (
    <div>
      <SubAdminDashboardCard />

      <div>
        <h1 className="my-2 text-20 font-600">Recent request</h1>
        <ResTable
          column={dashboardBookingColumn}
          data={RData?.data.slice(0, 10)}
          loading={isLoading || isFetching}
        />
      </div>
    </div>
  );
};

export default SubAdminDashboard;
