/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";

import ResInput from "../../../component/Form/ResInput";

const AddCategory = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="mt-4">
      <ResForm onSubmit={onSubmit}>
        <ResInput
          type="text"
          label="Enter Category Title"
          name="category"
          placeholder="category name"
          size="large"
        />

        <Button
          htmlType="submit"
          className="bg-primary text-white w-full  h-[40px]"
        >
          Submit
        </Button>
      </ResForm>
    </div>
  );
};

export default AddCategory;
