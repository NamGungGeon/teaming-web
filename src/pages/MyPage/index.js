import React, {Component} from 'react';
import {quickConnect} from "../../redux";
import HorizontalNavigation from "../../containers/Navigation/HorizontalNavigation";
import {getPath} from "../../lib/url";
import {Route} from "react-router-dom";
import Cash from "./Cash";
import Ading from "./Ading";
import Chat from "./Chat";
import Info from "./Info";
import Request from "./Request";
import Sns from "./Sns";
import Spec from "./Spec";
import Buy from "./Buy";
import Bucket from "./Bucket";

class MyPageRoot extends Component {
    menus= [
        {to: getPath('/mypage/chat'), title: '대화'},
        {to: getPath('/mypage/cash'), title: '캐시'},
        {to: getPath('/mypage/info'), title: '내 정보'},
        {to: getPath('/mypage/buy'), title: '구매 이력'},
        {to: getPath('/mypage/bucket'), title: '장바구니'},
        {to: getPath('/mypage/spec'), title: '광고 이력', type: 'MI'},
        {to: getPath('/mypage/ing'), title: '진행중인 광고', type: 'MI'},
        {to: getPath('/mypage/request'), title: '요청 관리', type: 'MI'},
        {to: getPath('/mypage/sns'), title: 'SNS 관리', type: 'MI'},
    ];

    componentDidMount() {
        const {auth, history}= this.props;
        if(!auth)
            history.push(getPath('/'));
    }

    render() {
        const {match, history}= this.props;
        console.log(match);
        return (
            <div>
                <HorizontalNavigation menus={this.menus} only={'MI'}/>
                <div>
                    <Route exact path={getPath(match.url+ '/cash')} component={Cash}/>
                    <Route exact path={getPath(match.url+ '/ing')} component={Ading}/>
                    <Route exact path={getPath(match.url+ '/chat')} component={Chat}/>
                    <Route exact path={getPath(match.url+ '/info')} component={Info}/>
                    <Route exact path={getPath(match.url+ '/request')} component={Request}/>
                    <Route exact path={getPath(match.url+ '/sns')} component={Sns}/>
                    <Route exact path={getPath(match.url+ '/spec')} component={Spec}/>
                    <Route exact path={getPath(match.url+ '/buy')} component={Buy}/>
                    <Route exact path={getPath(match.url+ '/bucket')} component={Bucket}/>
                </div>
            </div>
        );
    }
}

export default quickConnect(MyPageRoot);