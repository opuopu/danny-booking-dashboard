import { NavLink, useNavigate } from "react-router-dom";
import bgImage from "./../../assets/bg_2.jpg";
import { LeftOutlined } from "@ant-design/icons";
import GuruForm from "../../component/Form/FormProvider";
import ResInput from "../../component/Form/ResInput";
import { Button } from "antd";
import { GiConfirmed } from "react-icons/gi";
interface PasswordProps {
  newPassword: string;
  confirmPassword: string;
}
const NewPassword = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: PasswordProps) => {
    console.log(data);
    navigate("/login");
  };
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[490px] h-[440px]  bg-white px-4 rounded">
          <div className=" mt-8 ">
            <NavLink to="/verify-otp">
              <LeftOutlined
                style={{
                  backgroundColor: "#CCCCCC",
                  padding: "12px",
                  borderRadius: "50%",
                }}
              />
            </NavLink>
            <h1 className="text-primary text-32 font-600 mt-2">
              Set New Password
            </h1>
            <p className="text-20">
              A password should be more than 8 characters, including digits,
              letters, and symbols
            </p>
          </div>

          <div>
            <GuruForm onSubmit={onSubmit}>
              <ResInput
                size="large"
                label="New Password"
                type="password"
                name="newPassword"
                placeholder="enter your current password"
              />
              <ResInput
                size="large"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="enter your confirm password"
              />

              <Button
                htmlType="submit"
                className="bg-primary w-full h-[38px] flex justify-center items-center font-600 text-18 border-0"
                icon={<GiConfirmed />}
              >
                Confirm
              </Button>
            </GuruForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
