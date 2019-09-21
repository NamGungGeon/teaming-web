import React, {Component} from 'react';
import styles from './ItemList.module.css';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import fullSizeIcon from "../../res/full_icon.png";
import {formatToMoney, randStr} from "../../lib/utils";
import {getPath} from "../../lib/url";

class ItemList extends Component {
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
                                                <Button color={'primary'} size={'sm'} onClick={()=>{history.push(getPath(`/billing/${randStr(10)}`))}}>상세보기</Button>
                                                &nbsp;&nbsp;
                                                <Button color={'info'} size={'sm'}>장바구니</Button>
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

export default ItemList;