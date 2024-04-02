/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import MultiUpload from "../../../component/MultiUpload/MultiUpload";
import { Button, Col, Divider, Form, Row, Switch, UploadFile } from "antd";
import { RcFile } from "antd/es/upload";
import ResForm from "../../../component/Form/FormProvider";
import ResInput from "../../../component/Form/ResInput";
import ResTextArea from "../../../component/Form/ResTextarea";
import ResTimePicker from "../../../component/Form/ResTimepicker";
const CreateRestaurant = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const onChange = (value: boolean) => {
    console.log(value);
  };
  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <ResForm onSubmit={onSubmit}>
        <Row gutter={[14, 0]}>
          <Col span={24}>
            <Form.Item>
              <MultiUpload
                fileList={fileList as RcFile[]}
                setFileList={setFileList}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <ResInput
              size="large"
              label="Enter Restaurant name"
              type="text"
              name="name"
              placeholder="type name here"
            />
          </Col>
          <Col span={12}>
            <ResInput
              size="large"
              label="Enter Restaurant Location"
              type="text"
              name="location"
              placeholder="type restaurant location"
            />
          </Col>
          <Col span={24}>
            <ResTextArea
              label="Description"
              name="description"
              placeholder="type restaurant description"
            />
            <Form.Item name="review-status">
              <div className="flex gap-x-2 items-center">
                <p>Review Status</p>
                <Switch defaultChecked onChange={onChange} />
              </div>
            </Form.Item>
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
                <ResTimePicker
                  label="Sunday Open Time"
                  name="sunday.openTime"
                />
              </Col>
              <Col span={12}>
                <ResTimePicker
                  label="Sunday Close Time"
                  name="sunday.closeTime"
                />
              </Col>
              <Col span={12}>
                <ResTimePicker
                  label="Monday Open Time"
                  name="monday.openTime"
                />
              </Col>
              <Col span={12}>
                <ResTimePicker
                  label="Monday Close Time"
                  name="monday.closeTime"
                />
              </Col>
              <Col span={12}>
                <ResTimePicker
                  label="Friday Open Time"
                  name="friday.openTime"
                />
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

            <div className="flex justify-end mt-6 ">
              <Button
                htmlType="submit"
                className=" bg-primary text-white font-600 w-[150px] text-18 h-[40px]"
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </ResForm>
    </div>
  );
};

export default CreateRestaurant;
