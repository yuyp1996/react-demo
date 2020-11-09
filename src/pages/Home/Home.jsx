// 引入Hook
import React, { useEffect } from 'react';
// 引入全局状态函数
import { connect } from "react-redux";
// 引入样式
import './Home.scss';
// 引入Ant组件
import {
	Layout,
	Statistic, Row, Col,
	Card
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Countdown } = Statistic;

// 祖界面
function Home(props) {
	// 声明state变量
	// const [name] = useState('home');
	const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

	function onFinish() {
		console.log('finished!');
	}

	useEffect(() => {
		console.log('redux传过来的值是' + props.pageTitle);
	});

	return (
		<Layout>
			<Content className={'main-box'}>
				<div
					className={'main-card'}
				>
					<div className={'home-box'}>
						<h1 className={'h1-title'}>截止时间：</h1>
						<Row gutter={16}>
							<Col span={12}>
								<Countdown title="Countdown" value={deadline} onFinish={onFinish} />
							</Col>
							<Col span={12}>
								<Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
							</Col>
							<Col span={24} style={{ marginTop: 32 }}>
								<Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
							</Col>
						</Row>
					</div>
					<div className={'home-box'}>
						<h1 className={'h1-title'}>用户活跃：</h1>
						<Row gutter={16}>
							<Col span={12}>
								<Card>
									<Statistic
										title="Active"
										value={11.28}
										precision={2}
										valueStyle={{ color: '#3f8600' }}
										prefix={<ArrowUpOutlined />}
										suffix="%"
									/>
								</Card>
							</Col>
							<Col span={12}>
								<Card>
									<Statistic
										title="Idle"
										value={9.3}
										precision={2}
										valueStyle={{ color: '#cf1322' }}
										prefix={<ArrowDownOutlined />}
										suffix="%"
									/>
								</Card>
							</Col>
						</Row>
					</div>
				</div>
			</Content>
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);