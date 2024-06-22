/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ResForm from "../../../component/Form/FormProvider";
import ResDatePicker from "../../../component/Form/ResDatePicker";
import ResInput from "../../../component/Form/ResInput";
import ResTimePicker from "../../../component/Form/ResTimepicker";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useInsertBookingIntoDbMutation } from "../../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../../redux/hooks";
import { reservationValidation } from "../../../schema/booking.schema";

const AddBooking = ({ setShow }: any) => {
  const [addBooking, { isLoading }] = useInsertBookingIntoDbMutation();
  const User = useAppSelector(useCurrentUser);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formatedData = {
      ...data,
      branch: User?.branch,
    };
    try {
      await addBooking(formatedData).unwrap();
      toast.success("Reservation added successfully");
      setShow((prev: boolean) => !prev);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };
  return (
    <ResForm
      onSubmit={onSubmit}
      resolver={zodResolver(reservationValidation.reservationSchema)}
    >
      <ResInput
        size="large"
        name="name"
        placeholder="enter customer name"
        label="Customer Name"
        type="text"
      />
      <ResInput
        size="large"
        name="email"
        placeholder="enter customer email"
        label="Customer Email"
        type="text"
      />
      <ResInput
        size="large"
        name="number"
        placeholder="enter customer number"
        label="Customer Number (optional)"
        type="number"
      />
      <ResDatePicker
        size="large"
        name="date"
        placeholder="select date"
        label="Select Date"
      />
      <ResInput
        type="number"
        size="large"
        name="seats"
        placeholder="enter number of persons"
        label="Enter total persons"
      />
      <ResTimePicker
        size="large"
        name="arrivalTime"
        placeholder="select date"
        label="Select Time"
      />
      <Button
        htmlType="submit"
        className="bg-primary text-white w-full h-10 font-600"
      >
        {isLoading ? (
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 24, color: "white" }} />
            }
          />
        ) : (
          "SUBMIT"
        )}
      </Button>
    </ResForm>
  );
};

export default AddBooking;
