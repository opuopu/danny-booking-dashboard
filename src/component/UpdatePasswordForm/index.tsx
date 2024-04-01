/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResInput from "../Form/ResInput";
import GuruForm from "../Form/FormProvider";
import { GiConfirmed } from "react-icons/gi";

interface SubmitProps {
  newPassword: string;
  confirmPassword: string;
}
const UpdatePasswordForm = () => {
  const onSubmit = async (data: SubmitProps) => {
    console.log(data);
  };
  return (
    <div>
      <GuruForm onSubmit={onSubmit}>
        <ResInput
          label="Current Password"
          type="password"
          size="large"
          name="currentPassword"
          placeholder="enter your current password"
        />
        <ResInput
          label="Current Password"
          size="large"
          type="password"
          name="confirmPassword"
          placeholder="enter your current password"
        />

        <Button
          className="bg-primary h-[38px] w-full flex justify-center items-center font-600 text-18 border-0"
          icon={<GiConfirmed />}
        >
          Confirm
        </Button>
      </GuruForm>
    </div>
  );
};

export default UpdatePasswordForm;
