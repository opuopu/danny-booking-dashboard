/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Row } from "antd";
import NotificationCard from "../../component/NotificationCom/NotificationCard";

import { useState } from "react";
import { toast } from "sonner";
import NoData from "../../component/NoData/NoData";
import ErrorResponse from "../../component/UI/ErrorResponse";
import ResPagination from "../../component/UI/Pagination";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useGetMyNotificationQuery,
  useMarkAsReadMutation,
} from "../../redux/features/notification/notificationApi";
import { useAppSelector } from "../../redux/hooks";

const Notification = () => {
  const [page, setPage] = useState<number>(1);
  const User = useAppSelector(useCurrentUser);
  const query: Record<string, any> = {};
  if (page) query["page"] = page;
  if (User?.branch) query["branch"] = User?.branch;
  const { data: notificationData } = useGetMyNotificationQuery(query);
  const onChange = (page: number, pageSize: number) => {
    setPage(page);
  };
  const [updateNotification] = useMarkAsReadMutation();
  const submit = async () => {
    const toastId = toast.loading("Updating...");
    try {
      await updateNotification({ read: true }).unwrap();
      toast.success("Mark as read successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };
  return (
    <div>
      <div className="flex justify-end">
        {/* {notificationData?.data && (
          <Button onClick={submit} className="bg-primary text-white ">
            Mark As Read
          </Button>
        )} */}
      </div>
      <div className="container mx-auto mt-4">
        {notificationData?.data ? (
          <Row gutter={[16, 16]}>
            {notificationData?.data?.map((data: any, index: number) => (
              <NotificationCard key={index} data={data} />
            ))}
          </Row>
        ) : (
          <div className="flex justify-center items-center">
            <NoData />
          </div>
        )}

        <div className=" text-end mt-4">
          {notificationData?.data && (
            <ResPagination
              total={notificationData?.meta?.total as number}
              onChange={onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
