/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";

import ResConfirm from "../../../component/UI/PopConfirm";
import { DatePicker, Input, Tag } from "antd";
import ResTable from "../../../component/Table";
import {
  useGetAllBookingQuery,
  useUpdateBookingMutation,
} from "../../../redux/features/booking/bookingApi";
import dayjs from "dayjs";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { DeleteOutlined } from "@ant-design/icons";
const Booking = () => {
  const [date, setDate] = useState<string | null>(dayjs().format("YYYY-MM-DD"));
  const [searchTerm, setSearchTerm] = useState<string | null>();
  const query: Record<string, any> = {};
  if (date) query["date"] = date;
  if (searchTerm) query["searchTerm"] = searchTerm;
  query["status"] = "active";
  const { data: bookingData, isLoading } = useGetAllBookingQuery(query);
  const [updateBooking] = useUpdateBookingMutation();
  const handleChangeStatus = async (id: string, status: string) => {
    const toastId = toast.loading("Updating...");
    const data = { status };
    try {
      await updateBooking({ id, body: data }).unwrap();
      toast.success("Status updated successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (err) {
      ErrorResponse(err, toastId);
    }
  };
  const onSearch = async (val: string) => {
    setSearchTerm(val);
  };

  const onDateChange = async (date: any) => {
    setDate(dayjs(date).format("YYYY-MM-DD"));
  };
  const customerData = [];

  for (let i = 1; i <= 20; i++) {
    customerData.push({
      key: i,
      name: `Customer ${i}`,
      email: `customer${i}@example.com`,
      bookingId: `B00${i}`,
      seats: Math.floor(Math.random() * 10) + 1, // Random number of seats between 1 and 10
      date: `2024-05-${Math.floor(Math.random() * 30) + 1}`, // Random date within May 2024
      time:
        `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
          Math.random() * 60
        )}` + (Math.random() < 0.5 ? " AM" : " PM"), // Random time
      status: Math.random() < 0.5 ? "Confirmed" : "Pending", // Random status
    });
  }
  const status = "active";
  const column = [
    // {
    //   title: "#SL",
    //   dataIndex: "index",
    //   key: "index",
    // },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Booking Number",
      dataIndex: "bookingId",
      key: "bookingId",
    },
    {
      title: "Seats",
      dataIndex: "seats",
      key: "seats",
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
      title: "Action",
      key: "status",
      render: (data: any) => {
        return status === "active" ? (
          <>
            <ResConfirm
              description="This action cannot be undone"
              handleOk={() => handleChangeStatus(data?._id, "reject")}
            >
              {/* Render the Cancel and Closed tags */}
              <Tag color="red" className="cursor-pointer">
                Reject
              </Tag>
            </ResConfirm>
            <ResConfirm
              description="This action cannot be undone"
              handleOk={() => handleChangeStatus(data?._id, "closed")}
            >
              <Tag className="cursor-pointer">Accept</Tag>
            </ResConfirm>
          </>
        ) : (
          <p>N/A</p>
        );
      },
    },

    {
      title: "Delete",
      key: "action",
      render: (data: any, index: number) => {
        return (
          <div className="text-center">
            <DeleteOutlined
              onClick={() => {}}
              className="cursor-pointer"
              key={index}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <BookingCard />

      <div className="flex justify-end gap-x-4 my-4">
        <DatePicker
          defaultValue={dayjs(dayjs(), "YYYY-MM-DD")}
          className="w-[200px]"
          size="large"
          onChange={onDateChange}
        />
        <Input.Search
          onSearch={onSearch}
          placeholder="customer email | name | booking ID"
          className="w-[400px]"
          size="large"
          allowClear
        />
      </div>
      <ResTable
        loading={isLoading}
        column={column}
        data={customerData}
        pagination={{ total: bookingData?.meta?.total, pageSize: 8 }}
      />
    </div>
  );
};

export default Booking;
