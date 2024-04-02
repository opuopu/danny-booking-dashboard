/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popconfirm } from "antd";
import { ReactNode } from "react";

interface TresConfirmProps {
  title: string;
  description: string;
  handleOk: (value: any) => void;
  children: ReactNode;
}
const ResConfirm = ({
  title,
  description,
  handleOk,
  children,
}: TresConfirmProps) => {
  return (
    <Popconfirm
      okButtonProps={{ style: { backgroundColor: "#4C9A29", color: "white" } }}
      title={title}
      description={description}
      onConfirm={handleOk}
    >
      {children}
    </Popconfirm>
  );
};

export default ResConfirm;
