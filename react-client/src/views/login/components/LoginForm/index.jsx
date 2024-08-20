import React, { memo } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
const LoginForm = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <Form name="login" size="large" initialValues={{ remember: true }} style={{ with: "100%" }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "请输入您的用户名" }]}>
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default memo(LoginForm);
