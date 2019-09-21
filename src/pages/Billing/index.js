import React, {Component} from 'react';
import {getPath} from "../../lib/url";
import Buy from "./Buy";
import Result from "./Result";
import {Route} from "react-router-dom";

class BillingRoot extends Component {
    render() {
        return (
            <div>
                <Route exact path={getPath('/billing/:billingId')} component={Buy}/>
                <Route exact path={getPath('/billing/:billingId/result')} component={Result}/>
            </div>
        );
    }
}

export default BillingRoot;