import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) =>({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 9)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res)=>{
            dispatch(changeList(res.data.data))
        }).catch(()=>{
            console.log('error');
        })
    }
};

export const searchFoucs = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter =() => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave =() => ({
    type: constants.MOUSE_LEAVE
})

export const changePageList =(page) =>({
    type: constants.CHANGE_PAGE_LIST,
    page
})