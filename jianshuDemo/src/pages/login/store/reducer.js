import { fromJS } from 'immutable';
import * as constants from './constants';

const defaulfState = fromJS({
    login: false
});


export default (state = defaulfState, action) => {
    // 代码优化
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login', action.value)     
        default:
            return state;
    } 
} 