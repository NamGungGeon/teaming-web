import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Info from "./Info";

class UserRoot extends Component {
    render() {
        const {history, match}= this.props;
        return (
            <div>
                <Route exact path={`${match.url}/:type/:id`} component={Info}/>
            </div>
        );
    }
}

export default UserRoot;