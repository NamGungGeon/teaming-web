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
import {randStr} from "../../lib/utils";
import ItemDetail from "../../containers/ItemDetail/ItemDetail";
import Jumbotron from "reactstrap/es/Jumbotron";

class View extends Component {
    state= {

    }

    render() {
        const {match, history}= this.props;
        console.log(match);
        const {itemId}= match.params;

        return (
            <div className={'guideLine'}>
                <ItemSummary itemId={itemId} history={history}/>
                <PageTitle title={'이 상품은 공동구매형 상품입니다'} explain={'진행률이 100%에 도달하지 못하거나, 판매자의 사정 등으로 주문이 취소될 수 있습니다'} centering/>
                <ItemDetail itemId={itemId}/>
            </div>
        );
    }
}

export default quickConnect(View);