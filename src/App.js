
import './App.css';
import {Route} from "react-router-dom";
import {Login, Join, Logout} from './pages';
import VerticalNavigation from "./containers/Navigation/VerticalNavigation";

import React, {Component} from 'react';
import {UiBundle} from "./lib/ui";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {quickConnect} from "./redux";
import MyPageRoot from "./pages/MyPage";
import HorizontalNavigation from "./containers/Navigation/HorizontalNavigation";
import MarketRoot from "./pages/Market";
import {getPath} from "./lib/url";
import BillingRoot from "./pages/Billing";

class App extends Component {
    state= {};

    componentDidMount() {
        this.props.UIKitDispatcher.init(UiBundle(this));
    }


    render() {
        return (
            <div>
                {
                    this.props.uiKit? this.props.uiKit.render(): ''
                }

                <VerticalNavigation/>
                <div className={'fullDisplay'}>
                    <Route exact path={getPath("/login")} component={Login}/>
                    <Route path={getPath("/join")} component={Join}/>
                    <Route exact path={getPath("/logout")} component={Logout}/>
                    <Route path={getPath("/mypage")} component={MyPageRoot}/>
                    <Route path={getPath("/market")} component={MarketRoot}/>
                    <Route path={getPath('/billing')} component={BillingRoot}/>
                </div>
            </div>
        );
    }
}

export default quickConnect(App);
