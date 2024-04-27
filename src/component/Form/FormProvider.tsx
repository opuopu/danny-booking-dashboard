/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Form } from "antd";
import { ReactNode, useEffect } from "react";
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
  const methods = useForm(formConfig);
  useEffect(() => {
    if (defaultValues) {
      Object.keys(defaultValues).forEach((name) => {
        methods.setValue(name, defaultValues[name]);
      });
    }
  }, [defaultValues, methods]);

  console.log(resolver);
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

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
