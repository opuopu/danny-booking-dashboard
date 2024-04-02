import React from "react";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { Button } from "antd";
interface TtableProps {
  name: string;
  seat: number;
}
const CreateTable = () => {
  const onSubmit = async (data: TtableProps) => {
    console.log(data);
  };
  return (
    <ResForm onSubmit={onSubmit}>
      <ResInput
        type="text"
        size="large"
        name="name"
        placeholder="Enter Table Name"
        label="Enter Table Name"
      />
      <ResInput
        type="number"
        size="large"
        name="seat"
        placeholder="Enter Seat No"
        label="Enter Seat No"
      />
      <div className="pt-4">
        <Button
          htmlType="submit"
          className="bg-primary text-white font-600 w-full h-[38px] "
        >
          CREATE TABLE
        </Button>
      </div>
    </ResForm>
  );
};

export default CreateTable;
