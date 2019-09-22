import React, {Component} from 'react';
import styles from './VerticalNavigation.module.css';
import icon from '../../res/horizontal_icon.png';
import {NavLink} from "react-router-dom";
import {getPath} from "../../lib/url";
import {quickConnect} from "../../redux";
import classNames from 'classnames';



class VerticalNavigation extends Component {
    quickMenus= [
        {
            title: '마켓',
            to: '/market',
            alwaysShow: true,
        },
        {
            title: '팀빌딩',
            to: '/team-build',
            alwaysShow: true,
        },
        {
            title: '회원가입',
            to: '/join',
            requireAuth: false,
        },
        {
            title: '로그인',
            to: '/login',
            requireAuth: false,
        },
        {
            title: '광고',
            to: '/advertise',
            requireAuth: true,
        },
        {
            title: '마이페이지',
            to: '/mypage',
            requireAuth: true,
        },
        {
            title: '로그아웃',
            to: '/logout',
            requireAuth: true,
        },
    ];

    render() {
        const {auth, nav}= this.props;
        console.log(auth);
        return (
            <nav className={classNames(styles.vertical, {hide: !nav.vertical})}>
                <span className={styles.left}>
                    <NavLink to={getPath('/')}>
                        <img src={icon} alt="" className={styles.icon}/>
                    </NavLink>
                </span>
                <span className={styles.right}>
                    {
                        this.quickMenus.map(value => (
                            value.requireAuth=== !!auth || value.alwaysShow?
                                <NavLink to={getPath(value.to)}>{value.title}</NavLink>: ''
                        ))
                    }
                </span>
            </nav>
        );
    }
}

export default quickConnect(VerticalNavigation);