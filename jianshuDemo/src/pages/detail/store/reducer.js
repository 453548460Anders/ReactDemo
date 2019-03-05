import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
});

export default (state = defaultState, action) => {
    // 代码优化
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    } 
} 




                