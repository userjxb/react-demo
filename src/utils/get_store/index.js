import { connect } from 'react-redux';  // (需要安装)
import { bindActionCreators } from 'redux';

const Connect = ({   // 传参
    UIComponent,
    actionCreators
}) => {
    return connect(
        state => state,
        actionCreators && ( dispatch => bindActionCreators( actionCreators, dispatch ) )
    )(UIComponent)
}

export default Connect;