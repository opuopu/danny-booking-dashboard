/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { Button } from "antd";
import { useAddTableMutation } from "../../../redux/features/table/tableApi";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import { tableValidation } from "../../../schema/table.schema";
import ResSelect from "../../../component/Form/ResSelect";

interface TTableProps {
  restaurantId: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateTable = ({ restaurantId, setShow }: TTableProps) => {
  const [addTable] = useAddTableMutation();
  const options = [
    { value: "branch 1", label: "Branch 1" },
    { value: "branch 2", label: "Branch 2" },
    { value: "branch 3", label: "Branch 3" },
  ];
  const onSubmit = async (data: any) => {
    data.seats = Number(data?.seats);
    const toastId = toast.loading("Creating...");
    try {
      await addTable({
        ...data,
        restaurant: restaurantId,
      }).unwrap();
      toast.success("Table added successfully", {
        id: toastId,
        duration: 2000,
      });

      setShow((prev: boolean) => !prev);
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };
  return (
    <ResForm
      onSubmit={onSubmit}
      resolver={zodResolver(tableValidation.createTableSchema)}
    >
      <ResSelect
        name="branch"
        size="large"
        options={options}
        placeholder="Select Branch"
        label="Select Branch Name"
      />
      <ResInput
        type="number"
        size="large"
        name="Total Tables"
        placeholder="Enter Total Tables"
        label="Enter total tables"
      />
      <ResInput
        type="number"
        size="large"
        name="Number of Persons"
        placeholder="Number of Persons"
        label="Enter Number of Persons"
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
