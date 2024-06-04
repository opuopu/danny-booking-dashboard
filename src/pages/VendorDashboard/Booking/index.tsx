/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";

import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import ResModal from "../../../component/Modal/Modal";
import ResTable from "../../../component/Table";
import { useFindAllBrancesBookingQuery } from "../../../redux/features/booking/bookingApi";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import { useAppSelector } from "../../../redux/hooks";
import AddBooking from "./AddBooking";
const Booking = () => {
  const query: Record<string, any> = {};
  const [date, setDate] = useState<string | null>(dayjs().format("YYYY-MM-DD"));
  const [branch, setBranch] = useState<string | null>(null);
  const { data: Bdata } = useGetAllBranchQuery({});
  const searchTerm = useAppSelector((state) => state.booking.searchTerm);
  const [show, setshow] = useState<boolean | null>(null);
  if (branch) query["branch"] = branch;
  if (date) query["date"] = date;
  if (searchTerm) query["searchTerm"] = searchTerm;
  const {
    data: bookingData,
    isLoading,
    isFetching,
  } = useFindAllBrancesBookingQuery(query);

  const options = Bdata?.data?.map((data: any) => ({
    label: data?.name,
    value: data?._id,
  }));

  const onDateChange = async (date: any) => {
    setDate(dayjs(date).format("YYYY-MM-DD"));
  };
  const column = [
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
      render: (data: any) => {
        return (
          <p>
            {data?.table1Capacity ?? 0}+{data?.table2Capacity ?? 0}+
            {data?.table3Capacity ?? 0}={data?.seats}
          </p>
        );
      },
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
      <ResModal
        showModal={show as boolean}
        setShowModal={setshow}
        title="Add A Reservation"
      >
        <AddBooking setShow={setshow} />
      </ResModal>
      <BookingCard />

      <div className="flex justify-end gap-x-4 my-4">
        <TimePicker
          className="w-[200px]"
          placeholder="start time"
          format="HH:mm"
          onChange={(time) => console.log(dayjs(time).format("HH:mm"))}
        />
        <TimePicker
          className="w-[200px]"
          placeholder="end time"
          format="HH:mm"
          onChange={(time) => console.log(dayjs(time).format("HH:mm"))}
        />

        <Select
          onChange={(value: string) => setBranch(value)}
          options={options}
          style={{ width: 200, height: 40 }}
          placeholder="Select Branch"
        />
        <DatePicker
          defaultValue={dayjs(dayjs(), "YYYY-MM-DD")}
          className="w-[200px]"
          size="large"
          onChange={onDateChange}
        />

        <Button
          onClick={() => setshow((prev) => !prev)}
          icon={<PlusCircleOutlined />}
          className="h-10 bg-primary text-white font-600"
        >
          Add Reservation
        </Button>
      </div>
      <ResTable
        loading={isLoading || isFetching}
        column={column}
        data={bookingData?.data}
        pagination={{ total: bookingData?.data?.length, pageSize: 8 }}
      />
    </div>
  );
};

export default Booking;
