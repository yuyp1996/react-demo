import React from 'react';

import { Layout,Menu } from 'antd';
import  * as Icon from '@ant-design/icons';

// 获取路由信息
import { withRouter } from 'react-router'

// 引入路由组件
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;


const { Sider } = Layout;

function SiderMenu(props) {

	// 当前页面定位
	const findNowPage = (menu, pathName, fatherKey) => {
		if (Object.prototype.toString.call(menu) !== '[object Array]') return;
		return menu.map(target => {
			if (target.url === pathName) return {now: target.key, father: fatherKey};
			let father = fatherKey || target.key;
			return findNowPage(target.children, pathName, father);
		})
	};
	const history = props.location;
	let nowPage = [].concat(...findNowPage(props.menu, history.pathname)).filter(Boolean);
	const defaultSelectedKeys = [nowPage[0].now];
	const defaultOpenKeys = [nowPage[0].father];

	return (
		<Sider
			collapsed={props.collapsed}
		>
			<Menu
				defaultSelectedKeys={defaultSelectedKeys}
				defaultOpenKeys={defaultOpenKeys}
				theme="dark"
				mode="inline"
			>
				{
					props.menu.map(first => {
						// 一级目录
						if (first.url) {
							return <Menu.Item key={first.key}>
								<Link to={first.url}>
									{first.title}
								</Link>
							</Menu.Item>
						} else {
							return <SubMenu
								key={first.key}
								title={
									<span>
										{
											React.createElement(
												Icon[first.icon],
												{
													style:{ fontSize: '16px', color: '#08c' }
												}
											)

										}
										<span>{first.title}</span>
									</span>
								}
							>
								{/*二级目录*/}
								{
									first.children.map(second => {
										if (second.url) {
											return <Menu.Item key={second.key}>
												<Link to={second.url}>
													{second.title}
												</Link>
											</Menu.Item>
										} else {
											return <Menu.ItemGroup key={second.key} title={second.title}>
												{/*三级目录*/}
												{
													second.children.map(third => {
														return <Menu.Item key={third.key}>
															<Link to={third.url}>
																{third.title}
															</Link>
														</Menu.Item>
													})
												}
											</Menu.ItemGroup>
										}
									})
								}
							</SubMenu>
						}
					})
				}
			</Menu>
		</Sider>

	);
}

export default withRouter(SiderMenu);