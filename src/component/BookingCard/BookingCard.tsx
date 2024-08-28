/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row } from "antd";

import dayjs from "dayjs";
import { MdOutlineDateRange, MdOutlineRunningWithErrors } from "react-icons/md";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetAllBookingQuery } from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/hooks";

const BookingCard = () => {
  const query: Record<string, any> = {};
  const User = useAppSelector(useCurrentUser);
  query["status"] = "onGoing";
  if (User?.branch) {
    query["branch"] = User?.branch;
  }
  const { data: totalOngoingBooking } = useGetAllBookingQuery(query);
  const { data: todays } = useGetAllBookingQuery({
    date: dayjs().format("YYYY-MM-DD"),
  });
  return (
    <Row gutter={[16, 16]}>
      {/* Responsive Column for Ongoing Reservation */}
      <Col xs={24} sm={12} md={8} lg={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <MdOutlineRunningWithErrors size={50} />
          <div className="font-600">
            <h1 className="text-end text-primary text-32">
              {totalOngoingBooking?.data?.length ?? 0}
            </h1>
            <p className="text-24">Ongoing Reservation</p>
          </div>
        </div>
      </Col>

      {/* Responsive Column for Today's Reservation */}
      <Col xs={24} sm={12} md={8} lg={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <MdOutlineDateRange size={50} />
          <div className="font-600">
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
