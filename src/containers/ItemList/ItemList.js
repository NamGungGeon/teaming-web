import React, {Component} from 'react';
import styles from './ItemList.module.css';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import fullSizeIcon from "../../res/full_icon.png";
import {formatToMoney, randStr} from "../../lib/utils";
import {getPath} from "../../lib/url";
import {quickConnect} from "../../redux";

class ItemList extends Component {

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
    };

    render() {
        const {items, history, match}= this.props;
        return (
            <div className={styles.wrapper}>
                {
                    items?
                        items.map(value=>{
                            return (
                                <span onClick={()=>{history.push(`${match.url}/${value.id}`)}}>
                                    <Card>
                                        <CardImg top width="100%" src={fullSizeIcon} alt="Card image cap"/>
                                        <CardBody>
                                            <CardTitle><b>{value.title} (★	{value.score.toFixed(1)}/5.0)</b></CardTitle>
                                            <CardSubtitle><p className={'explain'}>{formatToMoney(value.price)}원</p></CardSubtitle>
                                            <CardText>{value.text}</CardText>

                                            <br/>
                                            <CardSubtitle>{value.seller}</CardSubtitle>
                                            <br/>
                                            <div className={'centering'}>
                                                <Button color={'primary'} size={'sm'} onClick={this.buy}>즉시구매</Button>
                                                &nbsp;&nbsp;
                                                <Button color={'info'} size={'sm'} onClick={this.addToBucket}>장바구니</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </span>
                            )
                        })
                        : '없음 ㅈㅅ ㅋ'
                }
            </div>
        );
    }
}

export default quickConnect(ItemList);