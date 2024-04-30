/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import { useAppSelector } from "../../../redux/hooks";
import { toast } from "sonner";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import {
  useEditMyMenuCategoriesMutation,
  useGetSingleCategoryQuery,
} from "../../../redux/features/menu/menuApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { menuValidationSchema } from "../../../schema/menu.schema";
import UseImageUpload from "../../../hooks/useImageUpload";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetAllRestaurantsQuery } from "../../../redux/features/restaurant/restaurantApi";
import FileUpload from "../../../component/FileUpload";
import { Form } from "antd";
import ResSelect from "../../../component/Form/ResSelect";
import showImage from "../../../utils/showImage";

const EditCategory = ({ setshowEditModal }: any) => {
  const user = useAppSelector(useCurrentUser);
  const { categoryId } = useAppSelector((state) => state.menu);
  const { data: categtoryData } = useGetSingleCategoryQuery(categoryId!);
  const { data: restaurantData } = useGetAllRestaurantsQuery({
    owner: user?.userId,
  });
  const { setFile, imageUrl, imageFile } = UseImageUpload();
  const options = restaurantData?.data?.map((data: any) => {
    return {
      label: data?.name,
      value: data?._id,
    };
  });
  const [EditMenuCategory] = useEditMyMenuCategoriesMutation();
  const onSubmit = async (data: any) => {
    console.log(data);
    const toastId = toast.loading("Createing category....");
    const formData = new FormData();
    if (imageFile) {
      formData.append("file", imageFile);
    }

    formData.append("data", JSON.stringify(data));
    try {
      await EditMenuCategory({ id: categoryId, body: formData }).unwrap();
      toast.success("Menu category added successfully", {
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
        defaultValues={categtoryData?.data}
        resolver={zodResolver(menuValidationSchema.menuCategorySchema)}
      >
        <Form.Item className="flex justify-center">
          <FileUpload
            imageUrl={imageUrl ?? showImage(categtoryData?.data?.image)}
            setSelectedFile={setFile}
          />
        </Form.Item>
        <ResSelect
          defaultValue={categtoryData?.data?.restaurant}
          options={options}
          name="restaurant"
          size="large"
          label="Select Restaurant"
        />
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
