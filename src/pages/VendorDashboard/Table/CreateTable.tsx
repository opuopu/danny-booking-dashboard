/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider } from "antd";
import React from "react";
import { toast } from "sonner";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { useAddTableMutation } from "../../../redux/features/table/tableApi";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { tableValidation } from "../../../schema/table.schema";
import { FaPlusCircle } from "react-icons/fa";
import { FaEquals } from "react-icons/fa6";
import ResSelect from "../../../component/Form/ResSelect";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import {
  setTable1Capacity,
  setTable2Capacity,
  setTable3Capacity,
} from "../../../redux/features/table/tableSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

interface TTableProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateTable = ({ setShow }: TTableProps) => {
  const mergedTables = useAppSelector((state) => state.table.mergedTables);
  const dispatch = useAppDispatch();
  const [addTable] = useAddTableMutation();
  const { data: bData } = useGetAllBranchQuery({});
  const options = bData?.data?.map((data: any) => {
    return {
      label: data?.name,
      value: data?._id,
    };
  });
  const defaultValues = {
    branchName: undefined,
    totalTables: 0,
    seats: 0,
    table1Capacity: 0,
    table2Capacity: 0,
    table3Capacity: 0,
  };
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating...");
    try {
      await addTable(data).unwrap();
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
      // resolver={zodResolver(tableValidation.EditableSchema)}
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
        name="seats"
        placeholder="Number of Persons"
        label="Enter Number of Persons"
      />
      <ResInput
        type="number"
        size="large"
        name="total"
        placeholder="total tables"
        label="Enter total tables"
      />
      <h5 className="flex justify-center text-20 font-600 text-primary	">
        Merge Tables
      </h5>
      <Divider className="mt-1" />
      <div className="flex gap-x-4 items-center ">
        <ResInput
          onChange={(e) => dispatch(setTable1Capacity(e.target.value))}
          type="number"
          size="large"
          name="table1Capacity"
          placeholder="Table 1"
          label="Table 1"
        />
        <FaPlusCircle size={30} color="#0B835C" />

        <ResInput
          onChange={(e) => dispatch(setTable2Capacity(e.target.value))}
          type="number"
          size="large"
          name="table2Capacity"
          placeholder="Table 2"
          label="Table 2"
        />
        <FaPlusCircle size={30} color="#0B835C" />

        <ResInput
          onChange={(e) => dispatch(setTable3Capacity(e.target.value))}
          type="number"
          size="large"
          name="table3Capacity"
          placeholder="Table 3"
          label="Table 3"
        />
        <FaEquals size={30} color="#0B835C" />
        <h5 className=" border-primary px-4 py-2 rounded border-2 ">
          {mergedTables}
        </h5>
      </div>

      <div className="pt-4">
        <Button
          htmlType="submit"
          className="bg-primary text-white font-600 w-full h-[38px] "
        >
          EDIT TABLE
        </Button>
      </div>
    </ResForm>
  );
};

export default CreateTable;
