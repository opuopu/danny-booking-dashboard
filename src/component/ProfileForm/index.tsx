/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from "antd";
import GuruForm from "../Form/FormProvider";
import ResInput from "../Form/ResInput";
import { MdEditSquare } from "react-icons/md";

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
      <div className="flex items-center gap-x-2">
        <Button
          className="bg-primary w-full flex justify-center items-center font-600 text-18 border-0"
          icon={<MdEditSquare />}
        >
          Edit
        </Button>
      </div>
    </GuruForm>
  );
};

export default ProfileForm;
