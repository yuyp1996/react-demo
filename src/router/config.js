// 引入需要用到的页面组件
import Main from '../pages/Main/Main';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';

const routes = [
	{
		path: "/",
		component: Login,
		exact: true,
	},
	{
		path: "/system",
		component: Main,
		auth:true,
		exact: true,
		routes: [
			{
				path: "/system/home",
				component: Home,
				exact: true,
				auth:true,
			},
			{
				path: "/system/about",
				component: About,
				exact: true,
				auth:true,
			},
		]
	}
];
export default routes;