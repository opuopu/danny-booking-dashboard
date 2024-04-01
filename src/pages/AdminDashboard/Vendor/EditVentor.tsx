/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import SingleUpload from "../../../component/SingleUpload";
import UseImageUpload from "../../../hooks/useImageUpload";
import ResTextArea from "../../../component/Form/ResTextarea";

const EditVentor = () => {
  const { imageUrl, setFile } = UseImageUpload();
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <ResForm onSubmit={onSubmit}>
      <Form.Item className="flex justify-center">
        <SingleUpload imageUrl={imageUrl} setFile={setFile} />
        <p className="text-center">upload image</p>
      </Form.Item>
      <ResInput
        type="text"
        label="Enter Vendor Name"
        name="name"
        placeholder="name"
      />
      <ResInput
        type="number"
        label="Enter Vendor Number"
        name="number"
        placeholder="number"
      />
      <ResTextArea name="address" label="Enter Address" placeholder="address" />
      <Button
        htmlType="submit"
        className="bg-primary text-white w-full h-[36px]"
      >
        Edit
      </Button>
    </ResForm>
  );
};

export default EditVentor;
