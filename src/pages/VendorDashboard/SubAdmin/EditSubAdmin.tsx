/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import UseImageUpload from "../../../hooks/useImageUpload";

import FileUpload from "../../../component/FileUpload";
import { useAppSelector } from "../../../redux/hooks";
import { toast } from "sonner";
import { useUpdateUserMutation } from "../../../redux/features/auth/authApi";
import ErrorResponse from "../../../component/UI/ErrorResponse";
// import showImage from "../../../utils/showImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { authValidationSchema } from "../../../schema/auth.schema";
import { useGetAllBranchQuery } from "../../../redux/features/branch/branchApi";
import ResSelect from "../../../component/Form/ResSelect";
import showImage from "../../../utils/showImage";
import { FieldValues, SubmitHandler } from "react-hook-form";

const EditSubAdmin = ({ setShowEditModal }: any) => {
  const { imageUrl, setFile, imageFile } = UseImageUpload();
  const subAdminData = useAppSelector((state) => state.auth.subAdminDetails);
  const { data: bData } = useGetAllBranchQuery({});
  const options = bData?.data?.map((data: any) => ({
    label: data?.name,
    value: data?._id,
  }));

  const [editSubAdmin] = useUpdateUserMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Editing......");
    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }
    formData.append("data", JSON.stringify(data));
    try {
      await editSubAdmin({ id: subAdminData?._id, body: formData }).unwrap();
      toast.success("Sub admin profile updated successfully", {
        id: toastId,
        duration: 2000,
      });
      setShowEditModal((prev: boolean) => !prev);
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };

  return (
    <ResForm
      onSubmit={onSubmit}
      defaultValues={subAdminData}
      resolver={zodResolver(authValidationSchema.editSubAdminSchema)}
    >
      <Form.Item className="flex justify-center">
        <FileUpload
          imageUrl={imageUrl || showImage(subAdminData?.image)}
          setSelectedFile={setFile}
        />
        <p className="text-center">upload image</p>
      </Form.Item>
      <ResInput
        size="large"
        type="text"
        label="Enter Worker Name"
        name="name"
        placeholder="name"
      />
      <ResSelect
        defaultValue={subAdminData?.branch}
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
      <Button
        htmlType="submit"
        className="bg-primary text-white w-full h-[36px]"
      >
        Edit
      </Button>
    </ResForm>
  );
};

export default EditSubAdmin;
