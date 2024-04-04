/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";
interface OptionsProps {
  value: string | number;
  label: string;
  disabled?: boolean;
}
interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  size?: SizeType;
  options: OptionsProps[];
}

const ResSelect = ({
  name,
  label,
  placeholder,
  options,
  size,
}: SelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error ? error.message : ""}
        >
          <Select
            size={size}
            options={options}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Form.Item>
      )}
    />
  );
};

export default ResSelect;
