/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";

const CreateBranch = ({ setShow }: any) => {
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Creating......");
    try {
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
    <ResForm onSubmit={onSubmit}>
      <ResInput
        size="large"
        type="text"
        label="Enter Branch Name"
        name="name"
        placeholder="branch name"
      />
      <ResInput
        size="large"
        type="text"
        label="Enter Branch Location"
        name="location"
        placeholder="location"
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

export default CreateBranch;
