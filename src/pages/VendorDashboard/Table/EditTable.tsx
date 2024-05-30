/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { tableValidation } from "../../../schema/table.schema";
import { FaPlusCircle } from "react-icons/fa";
import { FaEquals } from "react-icons/fa6";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { useEditTableMutation } from "../../../redux/features/table/tableApi";
import {
  setTable1Capacity,
  setTable2Capacity,
  setTable3Capacity,
} from "../../../redux/features/table/tableSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const EditTable = ({ setShow }: any) => {
  const dispatch = useAppDispatch();
  const table: any = useAppSelector((state) => state.table.table);
  const mergedTables = useAppSelector((state) => state.table.mergedTables);
  const [editTable] = useEditTableMutation();
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Editing....");
    try {
      await editTable({ body: data, id: table?._id }).unwrap();
      toast.success("Table successfully updated", {
        id: toastId,
        duration: 2000,
      });
      setShow((prev: boolean) => !prev);
    } catch (err) {
      ErrorResponse(err, toastId);
    }
  };
  return (
    <ResForm
      onSubmit={onSubmit}
      defaultValues={table}
      // resolver={zodResolver(tableValidation.EditableSchema)}
    >
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

export default EditTable;
