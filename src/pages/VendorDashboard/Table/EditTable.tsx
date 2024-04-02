import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
interface TtableProps {
  name: string;
  seat: number;
}
const EditTable = () => {
  const defaultvalue = {
    name: "table 1",
    seat: 5,
  };
  const onSubmit = async (data: TtableProps) => {
    console.log(data);
  };
  return (
    <ResForm onSubmit={onSubmit} defaultValues={defaultvalue}>
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
          EDIT TABLE
        </Button>
      </div>
    </ResForm>
  );
};

export default EditTable;
