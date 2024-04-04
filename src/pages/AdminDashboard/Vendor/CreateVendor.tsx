/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, UploadProps } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import SingleUpload from "../../../component/SingleUpload";
import UseImageUpload from "../../../hooks/useImageUpload";
import ResInput from "../../../component/Form/ResInput";
import ResTextArea from "../../../component/Form/ResTextarea";

const CreateVendor = () => {
  const { imageUrl, setFile } = UseImageUpload();
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  const onchange: UploadProps["onChange"] = (info) => {
    if (info.file?.originFileObj) {
      setFile(info.file.originFileObj);
    }
  };
  return (
    <ResForm onSubmit={onSubmit}>
      <Form.Item className="flex justify-center">
        <SingleUpload imageUrl={imageUrl!} onchange={onchange} />
        <p className="text-center">upload image</p>
      </Form.Item>
      <ResInput
        type="text"
        label="Enter Vendor Name"
        name="name"
        placeholder="name"
      />
      <ResInput
        type="text"
        label="Enter Vendor Email"
        name="email"
        placeholder="email"
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
        Submit
      </Button>
    </ResForm>
  );
};

export default CreateVendor;
