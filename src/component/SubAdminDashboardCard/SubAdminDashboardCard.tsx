/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import moment from "moment";
import { MdPendingActions, MdRunningWithErrors } from "react-icons/md";
import { TUser, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetAllBookingQuery } from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/hooks";
const SubAdminDashboardCard = () => {
  const User: TUser | null = useAppSelector(useCurrentUser);
  const { data: Bdata } = useGetAllBookingQuery({
    status: "onGoing",
    branch: User?.branch,
  });
  const { data: B2data } = useGetAllBookingQuery({
    date: moment().format("YYYY-MM-DD"),
    branch: User?.branch,
  });

  return (
    <Row gutter={[16, 30]}>
      <Col lg={24} xl={6} md={24} sm={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-6 rounded">
            <MdPendingActions size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">
                {Bdata?.meta?.total ?? 0}
              </h1>
              <p className="text-24">Ongoing Reservation</p>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={24} xl={6} md={24} sm={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6  py-6 rounded">
            <MdRunningWithErrors size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">
                {B2data?.meta?.total ?? 0}
              </h1>
              <p className="text-24">Today's Reservation</p>
            </div>
          </div>
        </div>
      </Col>
      {/* <Col span={8}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-6 rounded">
            <MdCancel size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">
                {B3data?.meta?.total ?? 0}
              </h1>
              <p className="text-24">Cancelled Reservation</p>
            </div>
          </div>
        </div>
      </Col> */}
    </Row>
  );
};

export default SubAdminDashboardCard;
