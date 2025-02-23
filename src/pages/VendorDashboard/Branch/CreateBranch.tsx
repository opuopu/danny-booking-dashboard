/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Divider, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import ResSelect from "../../../component/Form/ResSelect";
import ResTextArea from "../../../component/Form/ResTextarea";
import ResTimePicker from "../../../component/Form/ResTimepicker";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { daysOfWeekend } from "../../../constant/days";
import { useCreateBranchMutation } from "../../../redux/features/branch/branchApi";
import { branchValidation } from "../../../schema/branch.schema";

const days: string[] = [
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
const defaultTimes = {
  openTime: "09:00",
  closeTime: "20:00",
};
interface TimeValues {
  openTime: string;
  closeTime: string;
}

const values: { [key: string]: TimeValues } = {};

days.forEach((day: string) => {
  values[day] = { ...defaultTimes };
});

const CreateBranch = ({ setShow }: any) => {
  const [addbranch] = useCreateBranchMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating......");
    try {
      await addbranch(data).unwrap();
      toast.success("Branch created successfully", {
        id: toastId,
        duration: 2000,
      });
      setShow((prev: boolean) => !prev);
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };

  return (
    <ResForm
      onSubmit={onSubmit}
      defaultValues={values}
      resolver={zodResolver(branchValidation.createBranch)}
    >
      <Row gutter={16}>
        <Col span={12}>
          <ResInput
            type="text"
            label="Enter Branch Name"
            name="name"
            placeholder="branch name"
          />
        </Col>
        <Col span={12}>
          <ResInput
            type="text"
            label="Enter Branch Location"
            name="location"
            placeholder="location"
          />
        </Col>
        <Col span={8}>
          <ResInput
            type="number"
            label="Enter Total number of tables"
            name="tables"
            placeholder="tables"
          />
        </Col>
        <Col span={8}>
          <ResSelect
            options={daysOfWeekend}
            label="Select Closed Date"
            name="daysOfWeek"
            placeholder="closed date"
          />
        </Col>
        <Col span={8}>
          <ResInput
            type="number"
            label="Enter Time Limitation(minute)"
            name="endTimeLimit"
            placeholder="limit"
          />
        </Col>
        <Col span={12}>
          <Divider className="bg-deepGray" />
          <Row gutter={16}>
            <Col span={12}>
              <ResTimePicker
                label="Saturday Open Time"
                name="saturday.openTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Saturday Close Time"
                name="saturday.closeTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker label="Sunday Open Time" name="sunday.openTime" />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Sunday Close Time"
                name="sunday.closeTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker label="Monday Open Time" name="monday.openTime" />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Monday Close Time"
                name="monday.closeTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker label="Friday Open Time" name="friday.openTime" />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Friday Close Time"
                name="friday.closeTime"
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Divider className="bg-deepGray" />
          <Row gutter={16}>
            <Col span={12}>
              <ResTimePicker
                label="Tuesday Open Time"
                name="tuesday.openTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Tuesday Close Time"
                name="tuesday.closeTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="WednesDay Open Time"
                name="wednesday.openTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="WednesDay Close Time"
                name="wednesday.closeTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Thursday Open Time"
                name="thursday.openTime"
              />
            </Col>
            <Col span={12}>
              <ResTimePicker
                label="Thursday Close Time"
                name="thursday.closeTime"
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <ResTextArea
            label="Email Template Data"
            name="emailTemplateText"
            placeholder="enter email template text here"
          />
        </Col>
      </Row>

      <Button
        htmlType="submit"
        className="bg-primary text-white w-full h-[36px]"
      >
        Submit
      </Button>
    </ResForm>
  );
};

export default CreateBranch;
