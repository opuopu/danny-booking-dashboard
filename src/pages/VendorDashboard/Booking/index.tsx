/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";

import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, DatePicker, Select, TimePicker } from "antd";
import dayjs from "dayjs";
import { toast } from "sonner";
import ResModal from "../../../component/Modal/Modal";
import ResTable from "../../../component/Table";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import ResConfirm from "../../../component/UI/PopConfirm";
import {
  useFindAllBrancesBookingQuery,
  useUpdateBookingMutation,
} from "../../../redux/features/booking/bookingApi";
import { setBookingFiletring } from "../../../redux/features/booking/bookingSlice";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import AddBooking from "./AddBooking";
const Booking = () => {
  const { data: Bdata } = useGetAllBranchQuery({});
  const { searchTerm, arrivalTime, expiryTime, branch, date } = useAppSelector(
    (state) => state.booking
  );
  const dispatch = useAppDispatch();
  const [show, setshow] = useState<boolean | null>(null);
  const query: Record<string, any> = {};
  if (branch) query["branch"] = branch;
  if (date) query["date"] = date;
  if (searchTerm) query["searchTerm"] = searchTerm;
  if (arrivalTime) query["arrivalTime"] = arrivalTime;
  if (expiryTime) query["expiryTime"] = expiryTime;
  const {
    data: bookingData,
    isLoading,
    isFetching,
  } = useFindAllBrancesBookingQuery(query);
  const [updateBooking] = useUpdateBookingMutation();
  const options = Bdata?.data?.map((data: any) => ({
    label: data?.name,
    value: data?._id,
  }));

  const handleDelete = async (id: string) => {
    const toastid = toast.loading("Deleting....");
    try {
      await updateBooking({ id, body: { isDeleted: true } }).unwrap();
      toast.success("Reservation deleted successfully.", {
        id: toastid,
        duration: 2000,
      });
    } catch (error) {
      ErrorResponse(error, toastid);
    }
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
        const table1 = data?.table1Capacity ?? 0;
        const table2 = data?.table2Capacity ?? 0;
        const table3 = data?.table3Capacity ?? 0;

        // Check if all table capacities are zero
        if (table1 === 0 && table2 === 0 && table3 === 0) {
          return <p>{data?.seats}</p>;
        } else {
          return (
            <p>
              {table1}+{table2}+{table3}={data?.seats}
            </p>
          );
        }
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
          <ResConfirm
            handleOk={() => handleDelete(data?._id)}
            description="This action cannot be undone!"
          >
            <DeleteOutlined className="cursor-pointer" key={index} />
          </ResConfirm>
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
          onChange={(time) =>
            dispatch(
              setBookingFiletring({ arrivalTime: dayjs(time).format("HH:mm") })
            )
          }
        />
        <TimePicker
          className="w-[200px]"
          placeholder="end time"
          format="HH:mm"
          onChange={(time) =>
            dispatch(
              setBookingFiletring({ expiryTime: dayjs(time).format("HH:mm") })
            )
          }
        />

        <Select
          onChange={(value: string) =>
            dispatch(setBookingFiletring({ branch: value }))
          }
          options={options}
          style={{ width: 200, height: 40 }}
          placeholder="Select Branch"
        />
        <DatePicker
          defaultValue={dayjs(dayjs(), "YYYY-MM-DD")}
          className="w-[200px]"
          size="large"
          onChange={(date) =>
            dispatch(
              setBookingFiletring({ date: dayjs(date).format("YYYY-MM-DD") })
            )
          }
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
