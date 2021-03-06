// reducer.js

// 默认值
import defaultState from './state.js'

// 一个reducer就是一个函数
export default function infoList (state = defaultState.infoList, action) {
	// 不同的action有不同的处理逻辑
	switch (action.type) {
		case 'SET_INFO_LIST':
			return action.data;
		default:
			return state
	}
}