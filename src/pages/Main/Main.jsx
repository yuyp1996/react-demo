// 引入Hook
import React from 'react';

import {SystemRouter} from '../../router/index';

import {withRouter} from "react-router-dom";
// 引入样式
import './Main.scss';
// 引入Ant组件
import {
	Layout,
	Button,
	Dropdown,
	Menu
} from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	DownOutlined,
} from '@ant-design/icons';


import SiderMenu from '../../components/SiderMenu';


const { Header } = Layout;

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			menu: [{
				title: '主界面',
				key: 'sub1',
				icon: 'TabletOutlined',
				children: [{
					title: '首页',
					key: 'item1',
					url: '/system/home'
				},{
					title: 'About',
					key: 'item2',
					url: '/system/about'
				}]
			}],
			collapsed: false,
			username: window.localStorage.username || window.sessionStorage.username
		};
	}

	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		const menu = this.state.menu;

		const loginOut = (
			<Menu>
				<Menu.Item>
					<div onClick={() => removeUserName()} rel="noopener noreferrer">退出</div>
				</Menu.Item>
			</Menu>
		);
		const removeUserName = () => {
			window.localStorage.username = '';
			window.sessionStorage.username = '';
			this.props.history.replace('/');
		};

		return (
			<Layout className="app-main">
				<SiderMenu
					menu={menu}
					collapsed={this.state.collapsed}
				/>
				<Layout>
					<Header className='app-header'>
						<Button type="primary" tabIndex={0} onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
						</Button>
						<h3 className='header-title'>欢迎使用后台系统</h3>
						<Dropdown overlay={loginOut} className={'user-profile'}>
							<a tabIndex={0} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
								你好，{this.state.username} <DownOutlined />
							</a>
						</Dropdown>
					</Header>
					{/*子路由*/}
					<SystemRouter />
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(Main);