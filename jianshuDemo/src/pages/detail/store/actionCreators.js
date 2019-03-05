import axios  from 'axios'
import * as constants from './constants';

export const getDetailInfo = (id)=>{
    return (dispatch) => {
        // axios.get('/api/detail.json?id='+id).then((res)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result = res.data.data;
            dispatch(changeDetail(result.titie, result.content));
        })
    }
}

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})