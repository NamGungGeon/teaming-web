import React, {Component} from 'react';
import {getPath} from "../../lib/url";
import {Route} from "react-router-dom";
import View from "./View";
import List from "./List";
import Statistics from "./Statistics";

class AdvertiseRoot extends Component {
    render() {
        const {history, match}= this.props;
        return (
            <div className={'padding-normal'}>
                <Route exact path={getPath(`${match.url}/`)} component={List}/>
                <Route exact path={getPath(`${match.url}/:adId/`)} component={View}/>
                <Route exact path={getPath(`${match.url}/:adId/statistics`)} component={Statistics}/>
            </div>
        );
    }
}

export default AdvertiseRoot;