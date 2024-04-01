/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
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
  options: OptionsProps[];
}

const ResSelect = ({ name, label, placeholder, options }: SelectProps) => {
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
