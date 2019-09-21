import React, {Component} from 'react';
import {Person, Store, GamesSharp} from '@material-ui/icons'
import {SvgIcon} from "@material-ui/core";
import {NavLink, Route} from "react-router-dom";
import {getPath} from "../../lib/url";
import JoinTypes from "../../containers/Join/JoinTypes/JoinTypes";
import JoinAsInfluencer from "../../containers/Join/JoinAsInfluencer/JoinAsInfluencer";


const Join= (props)=>{
    const {match}= props;
    console.log(match);
    return (
        <div>
            <Route exact path={match.url} component={JoinTypes}/>
            <Route exact path={match.url+ '/influencer'} component={JoinAsInfluencer}/>
        </div>
    );
};

export default Join;