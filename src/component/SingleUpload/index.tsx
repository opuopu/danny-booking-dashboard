/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Upload } from "antd";
import type { UploadProps } from "antd";
import { multiUpload } from "../../themes/uploadTheme";

const SingleUpload = ({ imageUrl, setFile }: any) => {
  const handleChange: UploadProps["onChange"] = (info) => {
    setFile(info.file.originFileObj);
  };
  const uploadButton = (
    <button
      style={{ border: 0, background: "none" }}
      type="button"
      className="w-full"
    >
      <PlusOutlined className="text-primary" />
      <div style={{ marginTop: 8 }} className="text-primary">
        Upload
      </div>
    </button>
  );

  return (
    <ConfigProvider theme={multiUpload}>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </ConfigProvider>
  );
};

export default SingleUpload;
