import React, {Component} from 'react';
import {
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import Input from "reactstrap/es/Input";
import ItemList from "../../containers/ItemList/ItemList";
import classNames from 'classnames';
import PageTitle from "../../components/PageTitle/PageTitle";
import {quickConnect} from "../../redux";
import ItemSummary from "../../containers/ItemSummary/ItemSummary";
import longImg from '../../res/long.png';
import {randStr, updateState} from "../../lib/utils";
import ItemDetail from "../../containers/ItemDetail/ItemDetail";
import Jumbotron from "reactstrap/es/Jumbotron";
import StickyNavigation from "../../containers/Navigation/StickyNavigation";
import BottomNavigation from "../../containers/Navigation/BottomNavigation";
import ItemSummaryBottom from "../../containers/ItemSummary/ItemSummaryBottom";
import ItemReviews from "../../containers/ItemReviews/ItemReviews";
import ItemQna from "../../containers/ItemQNA/ItemQNA";
import ItemPolicy from "../../containers/ItemPolicy/ItemPolicy";
import {getPath} from "../../lib/url";
import Button from "reactstrap/es/Button";

class View extends Component {
    state= {
        page: (<ItemDetail itemId={this.props.itemId}/>),
    }
    options= [
        {title: '상세정보', onClick: ()=>{updateState(this, {page: (<ItemDetail itemId={this.props.itemId}/>)})}, },
        {title: '리뷰', onClick: ()=>{updateState(this, {page: (<ItemReviews itemId={this.props.itemId}/>)})}, },
        {title: 'QNA', onClick: ()=>{updateState(this, {page: (<ItemQna itemId={this.props.itemId}/>)})}, },
        {title: '반품/교환정보', onClick: ()=>{updateState(this, {page: (<ItemPolicy itemId={this.props.itemId}/>)})}, },
    ];

    buy= ()=>{
        const {itemId, history}= this.props;
        const billingId= randStr(20);

        history.push(getPath(`/billing/${billingId}`));
    };
    addToBucket= ()=>{
        const {uiKit, history}= this.props;
        uiKit.popup.make((
            <div className={'centering'}>
                <h4>장바구니에 추가되었습니다</h4>
                <br/>
                <div className={'centering'}>
                    <Button color={'primary'} onClick={()=>{uiKit.popup.destroy();}}>닫기</Button>
                    &nbsp;
                    <Button color={'secondary'} onClick={()=>{uiKit.popup.destroy(); history.push(getPath(`/mypage/bucket`)); }}>장바구니로 이동</Button>
                </div>
            </div>
        ));
    }

    render() {
        const {match, history}= this.props;
        console.log(match);
        const {itemId}= match.params;

        return (
            <div className={'guideLine'}>
                <ItemSummary itemId={itemId} history={history} buy={this.buy} addToBucket={this.addToBucket}/>
                <PageTitle title={'이 상품은 공동구매형 상품입니다'} explain={'진행률이 100%에 도달하지 못하거나, 판매자의 사정 등으로 주문이 취소될 수 있습니다'} centering/>
                <StickyNavigation menus={this.options}/>
                {
                    this.state.page
                }
                <ItemSummaryBottom itemId={itemId} buy={this.buy} addToBucket={this.addToBucket}/>
            </div>
        );
    }
}

export default quickConnect(View);