/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { useAppSelector } from "../../../redux/hooks";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { useEditMyMenuCategoriesMutation } from "../../../redux/features/menu/menuApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { menuValidationSchema } from "../../../schema/menu.schema";

const EditCategory = ({ setshowEditModal }: any) => {
  const { categoryId, categoryTitle } = useAppSelector((state) => state.menu);

  const [EditMenuCategory] = useEditMyMenuCategoriesMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    const toastId = toast.loading("Updating category...");
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    try {
      await EditMenuCategory({ body: formData, id: categoryId }).unwrap();
      toast.success("Menu category updated successfully", {
        id: toastId,
        duration: 2000,
      });
      setshowEditModal((prev: boolean) => !prev);
    } catch (err) {
      ErrorResponse(err, toastId);
    }
  };
  return (
    <div className="mt-4">
      <ResForm
        onSubmit={onSubmit}
        defaultValues={{ title: categoryTitle }}
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
          Edit
        </Button>
      </ResForm>
    </div>
  );
};

export default EditCategory;
