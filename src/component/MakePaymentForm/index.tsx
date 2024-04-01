import { Button } from "antd";
import ResForm from "../Form/FormProvider";
import ResInput from "../Form/ResInput";
import ResSelect from "../Form/ResSelect";

const MakePaymentForm = () => {
  const onSubmit = () => {};
  const options = [{ label: "opuvai", value: "opuvai" }];
  return (
    <div>
      <ResForm onSubmit={onSubmit}>
        <ResSelect
          name="vendor"
          options={options}
          placeholder="select vendor"
          label="Select Vendor"
        />
        <ResInput
          label="Enter Amount"
          name="amount"
          type="number"
          placeholder="enter amount"
        />
        <ResInput
          label="Enter Perchantage"
          name="perchantage"
          type="number"
          placeholder="enter perchantage"
        />
        <div className="flex gap-x-2 font-600 text-20 mb-4">
          <p>Avilable Balance:</p>
          <p className="text-primary">$5000</p>
        </div>
        <Button
          htmlType="submit"
          className="bg-primary text-white font-600 h-[36px] w-full"
        >
          Make Payment
        </Button>
      </ResForm>
    </div>
  );
};

export default MakePaymentForm;
