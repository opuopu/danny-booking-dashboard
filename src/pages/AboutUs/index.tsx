import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Button, ConfigProvider } from "antd";
import { MdDoneOutline } from "react-icons/md";

const AboutUs = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <ConfigProvider>
      <div>
        <h1 className="text-primary text-32 font-600  mb-4">About Us</h1>
        <JoditEditor
          config={{
            height: "600px",
          }}
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
        <div className="flex justify-end mt-4">
          <Button
            className="bg-primary flex items-center border-0 font-600 "
            size="large"
            icon={<MdDoneOutline />}
          >
            Submit
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default AboutUs;
