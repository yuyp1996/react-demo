// action.js

// action也是函数
export function setInfoList (data) {
	return (dispatch, getState) => {
		dispatch({ type: 'SET_INFO_LIST', data: data })
	}
}