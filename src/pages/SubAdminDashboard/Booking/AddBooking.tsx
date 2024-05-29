import { FieldValues, SubmitHandler } from "react-hook-form";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import ResDatePicker from "../../../component/Form/ResDatePicker";
import ResTimePicker from "../../../component/Form/ResTimepicker";
import ResSelect from "../../../component/Form/ResSelect";
import { Button } from "antd";

const AddBooking = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <ResForm onSubmit={onSubmit}>
      <ResInput
        size="large"
        name="customerName"
        placeholder="enter customer name"
        label="Customer Name"
        type="text"
      />
      <ResInput
        size="large"
        name="customerEmail"
        placeholder="enter customer email"
        label="Customer Email"
        type="text"
      />

      <ResInput
        size="large"
        name="customerEmail"
        placeholder="enter customer number"
        label="Customer Number (optional)"
        type="number"
      />
      <ResSelect
        options={[
          { label: "Branch 1", value: "Branch 1" },
          { label: "Branch 2", value: "Branch 2" },
        ]}
        size="large"
        name="branch"
        placeholder="select branch"
        label="Select Branch"
      />
      <ResDatePicker
        size="large"
        name="date"
        placeholder="select date"
        label="Select Date"
      />
      <ResTimePicker
        size="large"
        name="time"
        placeholder="select date"
        label="Select Time"
      />
      <Button className="bg-primary text-white w-full h-10 font-600">
        Submit
      </Button>
    </ResForm>
  );
};

export default AddBooking;
