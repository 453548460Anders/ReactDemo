
// import { combineReducers } from 'redux'
/// redux-immutable 中的 combineReducers 就是一个 immutable对象
import { combineReducers } from 'redux-immutable'
/// 起别名
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';

 const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})

export default reducer;