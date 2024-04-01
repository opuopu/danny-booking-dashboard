import { Button } from "antd";
import GuruForm from "../../component/Form/FormProvider";
import ResInput from "../../component/Form/ResInput";
import { NavLink } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";

interface SubmitProps {
  currentPassword: string;
  newPassword: string;
  oldPassword: string;
}
const ChangePasswordFrom = () => {
  const onSubmit = async (data: SubmitProps) => {
    console.log(data);
  };
  const role = "admin";
  return (
    <div className="flex  items-center justify-center h-[80vh]">
      <div className="w-[800px] text-black">
        <div className="flex items-center gap-x-2 mb-4">
          <h1 className="font-600 text-32 text-primary ">
            Change Your Password
          </h1>
        </div>
        <GuruForm onSubmit={onSubmit}>
          <ResInput
            label="Current Password"
            type="password"
            size="large"
            name="currentPassword"
            placeholder="enter your current password"
          />
          <ResInput
            label="New Password"
            type="password"
            size="large"
            name="newPassword"
            placeholder="enter your current password"
          />
          <ResInput
            label="Old Password"
            type="password"
            size="large"
            name="oldPassword"
            placeholder="enter your current password"
          />
          <NavLink to={`/${role}/otp`}>
            <p className="text-gray text-end text-18 mb-4 font-600">
              Forgot Password
            </p>
          </NavLink>
          <Button
            className="bg-primary w-full h-[38px] flex justify-center items-center font-600 text-18 border-0"
            icon={<GiConfirmed />}
          >
            Confirm
          </Button>
        </GuruForm>
      </div>
    </div>
  );
};

export default ChangePasswordFrom;
