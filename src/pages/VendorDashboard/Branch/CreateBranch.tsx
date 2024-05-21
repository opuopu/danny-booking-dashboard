/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { useCreateBranchMutation } from "../../../redux/features/branch/branchApi";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateBranch = ({ setShow }: any) => {
  const [addbranch] = useCreateBranchMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating......");
    try {
      await addbranch(data).unwrap();
      toast.success("Branch created successfully", {
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
      <ResInput
        size="large"
        type="number"
        label="Please enter the total number of tables."
        name="tables"
        placeholder="tables"
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
