/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useUpdateBranchMutation } from "../../../redux/features/branch/branchApi";
import { useAppSelector } from "../../../redux/hooks";
interface Tbranch {
  name: string;
  location: string;
  _id: string;
}
const EditBranch = ({ setShowEditModal }: any) => {
  const [editBranch] = useUpdateBranchMutation();
  const branchData: Tbranch | null = useAppSelector(
    (state) => state.branch.branch
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Editing......");
    try {
      await editBranch({ id: branchData!._id, body: data }).unwrap();
      toast.success("Branch edited successfully", {
        id: toastId,
        duration: 2000,
      });
      setShowEditModal((prev: boolean) => !prev);
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };

  return (
    <ResForm onSubmit={onSubmit} defaultValues={branchData!}>
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

export default EditBranch;
