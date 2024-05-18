/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";

import UseImageUpload from "../../../hooks/useImageUpload";
import ResInput from "../../../component/Form/ResInput";

import { useCreateVendorMutation } from "../../../redux/features/auth/authApi";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import FileUpload from "../../../component/FileUpload";
import { zodResolver } from "@hookform/resolvers/zod";
import { authValidationSchema } from "../../../schema/auth.schema";
import ResSelect from "../../../component/Form/ResSelect";

const CreateSubAdmin = ({ setShow }: any) => {
  const { imageUrl, setFile, imageFile } = UseImageUpload();
  const [createVendor] = useCreateVendorMutation();
  const options = [
    {
      label: "Branch 1",
      value: "Branch 1",
    },
    {
      label: "Branch 2",
      value: "Branch 2",
    },
  ];
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating......");
    if (!imageFile) {
      toast.error("Please select an image", { id: toastId, duration: 2000 });
      return;
    }

    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }
    formData.append("data", JSON.stringify(data));

    try {
      await createVendor(formData).unwrap();
      toast.success("Sub admin created successfully", {
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
      resolver={zodResolver(authValidationSchema.createsubadminSchema)}
    >
      <Form.Item className="flex justify-center">
        <FileUpload imageUrl={imageUrl!} setSelectedFile={setFile} />
        <p className="text-center">upload image</p>
      </Form.Item>
      <ResInput
        size="large"
        type="text"
        label="Enter Worker Name"
        name="name"
        placeholder="name"
      />

      <ResInput
        size="large"
        type="text"
        label="Enter Worker Email"
        name="email"
        placeholder="email"
      />

      <ResSelect
        size="large"
        options={options}
        label="Select Branch"
        name="branch"
        placeholder="branch"
      />
      <ResInput
        size="large"
        type="text"
        label="Enter Worker Designation"
        name="designation"
        placeholder="designation"
      />
      <ResInput
        size="large"
        type="text"
        label="Enter a password"
        name="password"
        placeholder="password"
      />

      <Button
        htmlType="submit"
        className="bg-primary text-white w-full h-[36px]"
      >
        Submit
      </Button>
    </ResForm>
  );
};

export default CreateSubAdmin;
