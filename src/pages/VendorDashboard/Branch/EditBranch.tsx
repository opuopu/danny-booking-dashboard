/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Row,
  TimePicker,
} from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import ResSelect from "../../../component/Form/ResSelect";
import ResTextArea from "../../../component/Form/ResTextarea";
import ResTimePicker from "../../../component/Form/ResTimepicker";
import ErrorResponse from "../../../component/UI/ErrorResponse";
import { daysOfWeekend } from "../../../constant/days";
import { useUpdateBranchMutation } from "../../../redux/features/branch/branchApi";
import { useAppSelector } from "../../../redux/hooks";
import { branchValidation } from "../../../schema/branch.schema";

const EditBranch = ({ setShowEditModal }: any) => {
  const [editBranch] = useUpdateBranchMutation();
  const [startTime, setStartTime] = useState(dayjs("12:08", "HH:mm"));
  const [endTime, setEndTime] = useState(dayjs("12:08", "HH:mm"));
  const [blockDate, setBlockDate] = useState("");
  const branchData: any = useAppSelector((state) => state.branch.branch);
  const [timeBlocks, setTimeBlocks] = useState(branchData?.timeBlocks);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Editing......");
    try {
      await editBranch({ id: branchData!._id, body: data }).unwrap();
      toast.success("Branch edited successfully", {
        id: toastId,
        duration: 2000,
      });
      setShowEditModal((prev: boolean) => !prev);
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };

  const onChange: DatePickerProps<Dayjs[]>["onChange"] = (date, dateString) => {
    setBlockDate(dateString as string);
  };
  // @ts-ignore
  const onChange2 = (times) => {
    if (times && times.length === 2) {
      const startTime = times[0]?.format("HH:mm"); // Convert start time
      const endTime = times[1]?.format("HH:mm"); // Convert end time
      // You can now set these in your state
      setStartTime(startTime);
      setEndTime(endTime);
    }
  };

  const handleBlock = async () => {
    const toastId = toast.loading("Adding block...");
    try {
      const currentBlocks = timeBlocks || [];
      const newBlock = { date: blockDate, startTime, endTime };

      // Update the local state immediately
      const updatedBlocks = [...currentBlocks, newBlock];
      setTimeBlocks(updatedBlocks);

      // Update the backend
      await editBranch({
        id: branchData!._id,
        body: { timeBlocks: updatedBlocks },
      }).unwrap();

      toast.success("Block added successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };

  const handleRemove = async (index: any) => {
    const updatedBlocks = timeBlocks.filter((_: any, i: any) => i !== index); // Remove block by index
    setTimeBlocks(updatedBlocks); // Update local state

    // Update backend
    const toastId = toast.loading("Updating...");
    try {
      await editBranch({
        id: branchData!._id,
        body: { timeBlocks: updatedBlocks },
      }).unwrap();
      toast.success("Block removed successfully", { id: toastId });
    } catch (error) {
      ErrorResponse(error, toastId);
    }
  };
  return (
    <ResForm
      onSubmit={onSubmit}
      defaultValues={branchData!}
      resolver={zodResolver(branchValidation.editBranch)}
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
            defaultValue={branchData?.daysOfWeek}
            options={daysOfWeekend}
            label="Select Closed Date"
            name="daysOfWeek"
            placeholder="closed date"
          />
        </Col>
        <Col span={8}>
          <ResInput
            type="number"
            label="Enter Time Limitation"
            name="endTimeLimit"
            placeholder="limit"
          />
        </Col>
        <Col span={12}>
          <p className="mb-2">Select Blocking Time</p>
          <div className="flex gap-x-4">
            <DatePicker
              placeholder="select blocking time"
              onChange={onChange}
              maxTagCount="responsive"
            />
            <div>
              <TimePicker.RangePicker
                // defaultValue={[startTime, endTime]}
                format={"HH:mm"}
                onChange={onChange2}
              />
            </div>
            <Button
              onClick={() => handleBlock()}
              className="border border-primary text-primary font-500"
            >
              Add
            </Button>
          </div>
          <div className="mt-4">
            {timeBlocks.map((block: any, index: any) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              >
                <span>
                  {block.date}: {block.startTime} - {block.endTime}
                </span>
                <CloseOutlined
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleRemove(index)}
                />
              </div>
            ))}
          </div>
        </Col>

        <Col span={12}></Col>

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

export default EditBranch;
