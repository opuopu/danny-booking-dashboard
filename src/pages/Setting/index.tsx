/* eslint-disable prefer-const */
import { Col, Row } from "antd";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Setting = () => {
  let role = "admin";
  return (
    <div className="container mx-auto">
      <Row gutter={[0, 30]}>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-black">
            <p className="">Notification</p>
            <NavLink to={`/${role}/notification`}>
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-primary mt-4" />
        </Col>
        <Col span={24}>
          <div className="flex items-center justify-between text-20  text-black">
            <p className="">Change Password</p>
            <NavLink to={`/${role}/change-password`}>
              <FaArrowRightToBracket cursor="pointer" />
            </NavLink>
          </div>
          <hr className="text-primary mt-4" />
        </Col>
        {role === "vendor" && (
          <>
            {" "}
            <Col span={24}>
              <div className="flex items-center justify-between text-20  text-black">
                <p className="">Privacy Policy</p>
                <NavLink to={`/${role}/privacy-policy`}>
                  <FaArrowRightToBracket cursor="pointer" />
                </NavLink>
              </div>
              <hr className="text-primary mt-4" />
            </Col>
            <Col span={24}>
              <div className="flex items-center justify-between text-20  text-black">
                <p className="">Terms And Condition</p>
                <NavLink to={`/${role}/terms`}>
                  <FaArrowRightToBracket cursor="pointer" />
                </NavLink>
              </div>
              <hr className="text-primary mt-4" />
            </Col>
            <Col span={24}>
              <div className="flex items-center justify-between text-20  text-black">
                <p className="">About Us</p>
                <NavLink to={`/${role}/about`}>
                  <FaArrowRightToBracket cursor="pointer" />
                </NavLink>
              </div>
              <hr className="text-primary mt-4" />
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Setting;
