// 引入Hook
import React, { useState } from 'react';
// 引入全局状态函数
import { connect } from "react-redux";
// 引入action
import { setPageTitle } from '../store/actions.js'
// 引入样式
import './example.scss';
// 引入Ant组件
import {
	Layout
} from 'antd';
const { Footer, Content } = Layout;


// 祖界面
function Example(props) {
	// 声明state变量
	const [name, setName] = useState(false);
	const { pageTitle, setPageTitle } = props;

	return (
		<Layout>
			<Content className={'main-box'}>
				<div
					className={'main-card'}
				>
					这里是{ name }页面
					<div>
						redux的值是{ pageTitle }
						<button onClick={() => setPageTitle('我的页面')}>设置</button>
					</div>
				</div>
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	)
}

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		pageTitle: state.pageTitle
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		setPageTitle (data) {
			// 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
			dispatch(setPageTitle(data))
			// 执行setPageTitle会返回一个函数
			// 这正是redux-thunk的所用之处:异步action
			// 上行代码相当于
			/*dispatch((dispatch, getState) => {
				dispatch({ type: 'SET_PAGE_TITLE', data: data })
			)*/
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);