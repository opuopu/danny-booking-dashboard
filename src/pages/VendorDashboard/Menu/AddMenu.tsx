/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import SingleUpload from "../../../component/SingleUpload";
import UseImageUpload from "../../../hooks/useImageUpload";
import ResInput from "../../../component/Form/ResInput";
import ResSelect from "../../../component/Form/ResSelect";
const AddMenu = () => {
  const { imageUrl, setFile } = UseImageUpload();
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  const options = [{ label: "true", value: "true" }];
  return (
    <ResForm onSubmit={onSubmit}>
      <Form.Item className="flex justify-center">
        <SingleUpload imageUrl={imageUrl} setFile={setFile} />
      </Form.Item>
      <ResInput
        type="text"
        label="Enter Menu Name"
        name="menu"
        placeholder="menu name"
        size="large"
      />
      <ResInput
        type="number"
        label="Enter Menu Price"
        name="price"
        placeholder="price"
        size="large"
      />
      <ResSelect
        label="Select Avilable Status"
        name="status"
        options={options}
        placeholder="select status"
        size="large"
      />
      <Button
        htmlType="submit"
        className="bg-primary text-white w-full  h-[40px]"
      >
        Submit
      </Button>
    </ResForm>
  );
};

export default AddMenu;
