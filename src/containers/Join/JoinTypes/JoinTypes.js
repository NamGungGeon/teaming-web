import React, {Component} from 'react';
import {GamesSharp, Person, Store} from "@material-ui/icons";
import styles from './JoinTypes.module.css';
import {NavLink} from "react-router-dom";
import {getPath} from "../../../lib/url";
import {SvgIcon} from "@material-ui/core";
import {quickConnect} from "../../../redux";
import classNames from 'classnames';

class JoinTypes extends Component {
    state= {};

    types= [
        {
            icon: Person,
            title: '일반 유저',
            desc: '일반유저는 여기로!',
            to: '/join/influencer',
        },
        {
            icon: Store,
            title: '광고주',
            desc: '광고주는 여기로!',
            to: '/join/influencer',
        },
        {
            icon: GamesSharp,
            title: '인플루언서',
            desc: '인플루언서는 여기로!',
            to: '/join/influencer',
        },
    ];

    componentDidMount() {
        this.props.NavDispatcher.vertical(false);
    }
    componentWillUnmount() {
        this.props.NavDispatcher.vertical(true);
    }

    render() {
        return (
            <div className={classNames('stretch', styles.parent)}>
                {
                    this.types.map((value)=>(
                        <NavLink to={getPath(value.to)} className={styles.userType}>
                            <div>
                                <SvgIcon component={value.icon} className={styles.icon}/>
                                <br/>
                                <div className={styles.desc}>
                                    <div className={styles.important}>
                                        {value.title}
                                    </div>
                                    {value.desc}
                                </div>
                            </div>
                        </NavLink>
                    ))
                }
            </div>);
    }
}

export default quickConnect(JoinTypes);