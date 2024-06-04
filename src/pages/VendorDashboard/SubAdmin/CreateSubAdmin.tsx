/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";

import ResInput from "../../../component/Form/ResInput";
import UseImageUpload from "../../../hooks/useImageUpload";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import FileUpload from "../../../component/FileUpload";
import ResSelect from "../../../component/Form/ResSelect";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { useCreateSubAdminMutation } from "../../../redux/features/auth/authApi";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import { authValidationSchema } from "../../../schema/auth.schema";
const CreateSubAdmin = ({ setShow }: any) => {
  const { imageUrl, setFile, imageFile } = UseImageUpload();
  const { data: bData } = useGetAllBranchQuery({});
  const [createSubAdmin] = useCreateSubAdminMutation();
  const options = bData?.data?.map((data: any) => ({
    label: data?.name,
    value: data?._id,
  }));
  const onSubmit = async (data: any) => {
    const formatedData = {
      ...data,
      role: "sub_admin",
    };
    const toastId = toast.loading("Creating......");
    if (!imageFile) {
      toast.error("Please select an image", { id: toastId, duration: 2000 });
      return;
    }

    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }
    formData.append("data", JSON.stringify(formatedData));
    try {
      await createSubAdmin(formData).unwrap();
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
