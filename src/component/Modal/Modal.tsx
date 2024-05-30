import { Modal } from "antd";
import { ReactNode } from "react";
interface ModalProps {
  title?: string;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  children: ReactNode;
  width?: number;
}
const ResModal = ({
  title,
  showModal,
  setShowModal,
  children,
  width,
}: ModalProps) => {
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Modal
      width={width}
      title={title}
      open={showModal}
      onCancel={handleCloseModal}
      okButtonProps={{ style: { visibility: "hidden" } }}
      cancelButtonProps={{ style: { visibility: "hidden" } }}
    >
      {children}
    </Modal>
  );
};

export default ResModal;
