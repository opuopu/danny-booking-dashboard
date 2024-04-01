import { Row } from "antd";
import NotificationCard from "../../component/NotificationCom/NotificationCard";

import GuruPagination from "../../component/UI/Pagination";
import { notificationArray } from "../../db";

const Notification = () => {
  return (
    <div className="container mx-auto">
      <Row gutter={[16, 16]}>
        {notificationArray.slice(0, 8).map((data, index) => (
          <NotificationCard key={index} data={data} />
        ))}
      </Row>
      <div className=" text-end mt-4">
        <GuruPagination total={notificationArray?.length} />
      </div>
    </div>
  );
};

export default Notification;
