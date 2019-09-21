
import {bindActionCreators, combineReducers} from "redux";
import uikit from "./uikit";
import auth from "./auth";
import nav from './nav';
import * as Auth from './auth';
import * as UIKit from './uikit';
import * as Nav from './nav';
import {connect} from "react-redux";

export default combineReducers({
    uikit, auth, nav
});


export const quickConnect= (component)=>{

    // import uikit from "./uikit"; 는 export default 만 가져오고
    // import * as UIKit from './uikit'; 는 전체 다 가져온다
    // 궁금하면 테스트
    // console.log(uikit);
    // console.log(UIKit);

    return connect(
        (state)=>{
            return {
                uiKit: state.uikit,
                auth: state.auth,
                nav: state.nav,
            };
        },
        (dispatch)=>{
            return {
                UIKitDispatcher: bindActionCreators(UIKit, dispatch),
                AuthDispatcher: bindActionCreators(Auth, dispatch),
                NavDispatcher: bindActionCreators(Nav, dispatch),
            };
        }
    )(component);
};
