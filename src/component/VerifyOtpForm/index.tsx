/* eslint-disable prefer-const */
import { Button, Col, Input, InputRef, Row } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./verifyOtpForm.module.css";

const VerifyOtpFrom = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const otpBoxReference: React.MutableRefObject<
    (InputRef | HTMLInputElement)[]
  > = useRef<(InputRef | HTMLInputElement)[]>([]);
  const handleChange = (value: string, index: number) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);
    if (value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };
  const handleBackspaceAndEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.currentTarget.value && index < 6 - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };
  const handleSubmit = () => {
    navigate("/new-password");
  };
  const resendOtp = () => {};
  return (
    <div className={` mt-2  flex flex-col`} style={{ height: "300px" }}>
      <Row>
        {otp.map((digit, index) => (
          <Col lg={4} className="text-center">
            <Input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) =>
                (otpBoxReference.current[index] = reference as InputRef)
              }
              className={`${style.otpInput}`}
            />
          </Col>
        ))}
      </Row>
      <div className="flex justify-between my-4">
        <p className="text-gray text-18 text-600">Don't received code?</p>
        <a
          className="reset-password-resend text-gray  font-600 text-18 hover:text-primary"
          onClick={resendOtp}
          href=""
        >
          Resend
        </a>
      </div>

      <div>
        <Button
          onClick={handleSubmit}
          //   disabled={otp.join("").length !== 6}
          htmlType="submit"
          className={`${style.otpButton}  `}
          block
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
export default VerifyOtpFrom;
