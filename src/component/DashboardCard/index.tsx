/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";
import moment from "moment";
import {
  MdCancel,
  MdPendingActions,
  MdRunningWithErrors,
} from "react-icons/md";
import { useGetAllBookingQuery } from "../../redux/features/booking/bookingApi";
const DashboardCard = () => {
  const { data: Bdata } = useGetAllBookingQuery({ status: "onGoing" });
  const { data: B2data } = useGetAllBookingQuery({
    date: moment().format("YYYY-MM-DD"),
  });
  const { data: B3data } = useGetAllBookingQuery({ status: "canCelled" });
  return (
    <Row gutter={[16, 30]}>
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
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
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
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
      <Col span={24}>
        <div className="w-[400px]">
          <div className="flex items-center justify-between  bg-white px-6 py-3 rounded">
            <MdCancel size={50} />
            <div className="font-600 ">
              <h1 className="text-end text-primary text-32">
                {B3data?.meta?.total ?? 0}
              </h1>
              <p className="text-24">Cancelled Reservation</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DashboardCard;
