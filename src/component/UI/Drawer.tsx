import { Drawer } from "antd";
import { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface DrawerProps {
  open: boolean;
  onClose: (props: any) => void;
  title: string;
  children: ReactNode;
}

const GuruDrawer = ({ open, onClose, children, title }: DrawerProps) => {
  return (
    <Drawer title={title} onClose={onClose} open={open}>
      {children}
    </Drawer>
  );
};

export default GuruDrawer;
