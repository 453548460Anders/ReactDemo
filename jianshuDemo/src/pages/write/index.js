import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
class Write  extends PureComponent {
    render(){
        const { loginStatus } = this.props;
        if (loginStatus){
            return(
                <div>
                    写文章
                </div>
            )
        }else{
            return <Redirect to='/login' />
        }
    }
    componentDidMount(){

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

// const mapDispatch = (dispatch) => ({
//     login(accountElm, passwordElm){
//         dispatch(actionCreators.login(accountElm.value, passwordElm.value))
//     }
// })

export default connect(mapState, null)(Write);