// 引入Hook
import React from 'react';
// 引入样式
import './Login.scss';
// 引入Ant组件
import { Form, Input, Button, Checkbox } from 'antd';
import {useHistory} from 'react-router-dom';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

// 祖界面
function Login(props) {
	// 声明state变量
	let history = useHistory();

	const onFinish = values => {
		if (values.remember) {
			window.localStorage.setItem('username', values.username)
		} else {
			window.localStorage.username = '';
			window.sessionStorage.username = values.username;
		}
		history.replace('/system/home');
		console.log('Success:', values);
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	if (window.localStorage.username || window.sessionStorage.username) history.replace('/system/home');

	return (
		<div className={'login-main'}>
			<div className={'login-from'}>
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: '请输入您的用户名!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: '请输入密码!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default Login;