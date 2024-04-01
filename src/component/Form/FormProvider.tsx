/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Form } from "antd";
import { ReactNode } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type TConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type ResFormProviderProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  theme?: any;
} & TConfig;

const ResForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  theme,
}: ResFormProviderProps) => {
  const formConfig: TConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <ConfigProvider theme={theme}>
      <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
          {children}
        </Form>
      </FormProvider>
    </ConfigProvider>
  );
};

export default ResForm;
