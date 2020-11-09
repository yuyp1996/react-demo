// reducers.js

// 工具函数，用于组织多个reducer，并返回reducer集合
import { combineReducers } from 'redux'
import pageTitle from './pageTitle/reducer'
import infoList from './infoList/reducer'

// 导出所有reducer
export default combineReducers({
	pageTitle,
	infoList
})