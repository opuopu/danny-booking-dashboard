/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { tableValidation } from "../../../schema/table.schema";
import { useAppSelector } from "../../../redux/hooks";
import { useEditTableMutation } from "../../../redux/features/table/tableApi";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { toast } from "sonner";

const EditTable = ({ setShow }: any) => {
  const table = useAppSelector((state) => state.table.table);
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
      resolver={zodResolver(tableValidation.createTableSchema)}
    >
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
          EDIT TABLE
        </Button>
      </div>
    </ResForm>
  );
};

export default EditTable;
