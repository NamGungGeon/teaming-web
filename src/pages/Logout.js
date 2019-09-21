import React, {Component} from 'react';
import {quickConnect} from "../redux";
import {Button} from "reactstrap";
import {getPath} from "../lib/url";

class Logout extends Component {
    componentDidMount() {
        this.props.AuthDispatcher.logout();
        this.props.history.push(getPath('/'));
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default quickConnect(Logout);