/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, ConfigProvider } from "antd";
import GuruForm from "../Form/FormProvider";
import ResInput from "../Form/ResInput";
import { MdEditSquare } from "react-icons/md";
import { inputTheme } from "../../themes/inputThemes";

interface ProfilePros {
  usrName: string;
  name: string;
  email: string;
}
const ProfileForm = () => {
  const onSubmit = async (data: ProfilePros) => {
    console.log(data);
  };
  const defaultValues = {
    userName: "opuvai",
    name: "opu vai 22",
    email: "opuvai@gmail.com",
  };
  return (
    // @ts-ignore
    <ConfigProvider theme={inputTheme}>
      <GuruForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <ResInput
          labelColor="#FD8533"
          label="User Name"
          type="text"
          name="userName"
          placeholder="your userName"
        />
        <ResInput
          labelColor="#FD8533"
          label="Name"
          type="text"
          name="name"
          placeholder="your name"
        />
        <ResInput
          labelColor="#FD8533"
          label="Email"
          type="text"
          name="email"
          placeholder="your email"
        />
      </GuruForm>
      <div className="flex items-center gap-x-2">
        <Button
          className="bg-orange w-full flex justify-center items-center font-600 text-18 border-0"
          icon={<MdEditSquare />}
        >
          Edit
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default ProfileForm;
