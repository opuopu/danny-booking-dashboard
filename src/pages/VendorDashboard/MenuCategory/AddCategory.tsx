/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";

import ResInput from "../../../component/Form/ResInput";
import { useAddMenuCategortyMutation } from "../../../redux/features/menu/menuApi";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { menuValidationSchema } from "../../../schema/menu.schema";

const AddCategory = ({ setShow }: any) => {
  const [addcategory] = useAddMenuCategortyMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    const toastId = toast.loading("Createing category....");
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    try {
      await addcategory(formData).unwrap();
      toast.success("Menu category added successfully", {
        id: toastId,
        duration: 2000,
      });
      setShow((prev: boolean) => !prev);
    } catch (err) {
      ErrorResponse(err, toastId);
    }
  };
  return (
    <div className="mt-4">
      <ResForm
        onSubmit={onSubmit}
        resolver={zodResolver(menuValidationSchema.menuCategorySchema)}
      >
        <ResInput
          type="text"
          label="Enter Category Title"
          name="title"
          placeholder="category name"
          size="large"
        />

        <Button
          htmlType="submit"
          className="bg-primary text-white w-full  h-[40px]"
        >
          Submit
        </Button>
      </ResForm>
    </div>
  );
};

export default AddCategory;
