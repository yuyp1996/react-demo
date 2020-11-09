// 引入Hook
import React, { useState } from 'react';
// 引入样式
import './About.scss';
// 引入Ant组件
import {
	Layout,
	Table, Tag, Space
} from 'antd';
const { Content } = Layout;
const { Column, ColumnGroup } = Table;


// 祖界面
function About(props) {
	// 声明state变量
	const [data] = useState([
		{
			key: '1',
			firstName: 'John',
			lastName: 'Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			firstName: 'Jim',
			lastName: 'Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			firstName: 'Joe',
			lastName: 'Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	]);

	return (
		<Layout>
			<Content className={'main-box'}>
				<div
					className={'main-card'}
				>
					<div className={'home-box'}>
						<Table dataSource={data}>
							<ColumnGroup title="Name">
								<Column title="First Name" dataIndex="firstName" key="firstName" />
								<Column title="Last Name" dataIndex="lastName" key="lastName" />
							</ColumnGroup>
							<Column title="Age" dataIndex="age" key="age" />
							<Column title="Address" dataIndex="address" key="address" />
							<Column
								title="Tags"
								dataIndex="tags"
								key="tags"
								render={tags => (
									<>
										{tags.map(tag => (
											<Tag color="blue" key={tag}>
												{tag}
											</Tag>
										))}
									</>
								)}
							/>
							<Column
								title="Action"
								key="action"
								render={(text, record) => (
									<Space size="middle">
										<a>Invite {record.lastName}</a>
										<a>Delete</a>
									</Space>
								)}
							/>
						</Table>
					</div>
				</div>
			</Content>
		</Layout>
	)
}

export default About;