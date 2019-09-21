import React, {Component} from 'react';
import {getPath} from "../../lib/url";
import {Route} from "react-router-dom";
import List from "./List";
import View from "./View";

class MarketRoot extends Component {
    render() {
        return (
            <div>
                <Route exact path={getPath('/market')} component={List}/>
                <Route exact path={getPath('/market/:itemId')} component={View}/>
            </div>
        );
    }
}

export default MarketRoot;