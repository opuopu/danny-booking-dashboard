/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";

import dayjs from "dayjs";
import { MdOutlineDateRange, MdOutlineRunningWithErrors } from "react-icons/md";
import { useGetAllBookingQuery } from "../../redux/features/booking/bookingApi";

const BookingCard = () => {
  const { data: totalBooking } = useGetAllBookingQuery({ status: "active" });
  const { data: totalCanlledBooking } = useGetAllBookingQuery({
    status: "cancelled",
  });

  const { data: todays } = useGetAllBookingQuery({
    date: dayjs().format("YYYY-MM-DD"),
  });
  return (
    <Row gutter={[16, 16]}>
      {/* <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <MdOutlinePendingActions size={50} />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">
              {totalBooking?.data?.length || 0}
            </h1>
            <p className="text-24">Pending Request</p>
          </div>
        </div>
      </Col> */}
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <MdOutlineRunningWithErrors size={50} />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">
              {totalCanlledBooking?.data?.length || 0}
            </h1>
            <p className="text-24">Ongoing Reservation</p>
          </div>
        </div>
      </Col>

      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6  rounded">
          <MdOutlineDateRange size={50} />
          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">
              {todays?.data?.length || 0}
            </h1>
            <p className="text-24">Today's Reservation</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BookingCard;
