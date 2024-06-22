import { Col } from "antd";
import { BiBuildings } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

/* eslint-disable @typescript-eslint/no-explicit-any */
const NotificationCard = ({ data }: any) => {
  // const backgroundColor = !data.read ? "#dee6db" : "##EDF5EA";
  console.log(data);
  return (
    <Col span={24}>
      <div
        className="flex gap-x-2  text-black pb-2  p-2 rounded "
        // style={{ backgroundColor }}
      >
        <IoNotificationsCircleOutline style={{ fontSize: "40px" }} />

        <div>
          <h1 className="text-20 pb-2">{data?.message}</h1>
          <p className="flex items-center gap-x-2">
            <BiBuildings />
            <span>{data?.branch}</span>
          </p>

          <p className="flex items-center gap-x-2">
            <IoIosTime />
            <span>{data?.arrivalTime}</span>
          </p>
          <p className="flex items-center gap-x-2">
            <MdDateRange />
            <span>{data?.arrivalDate}</span>
          </p>
        </div>
      </div>
      <hr className="text-primary " />
    </Col>
  );
};

export default NotificationCard;
