import React, {Component} from 'react';
import {quickConnect} from "../../redux";
import Jumbotron from "reactstrap/es/Jumbotron";
import styles from './ItemSummary.module.css';
import Col from "reactstrap/es/Col";
import {Container, Row} from "reactstrap";
import testImg from '../../res/full_icon.png';
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "reactstrap/es/Button";
import {formatToMoney, randStr} from "../../lib/utils";
import Progress from "reactstrap/es/Progress";
import {getPath} from "../../lib/url";
import Gallery from "../../components/Gallery/Gallery";

class ItemSummary extends Component {
    render() {
        const {itemId, history}= this.props;
        const images= [
            {src: testImg},
        ]
        return (
            <Container>
                <Row className={styles.container}>
                    <Col>
                        <Gallery images={images}/>
                    </Col>
                    <Col>
                        <div>
                            <h4>상품명</h4>
                            <p className="explain">부가설명</p>
                        </div>
                        <div className={'righting'}>
                            <span className={styles.price}>{formatToMoney(5000)}원</span>
                            <span className={styles.score}>★{(4.5).toFixed(1)}</span>
                        </div>
                        <div className={'righting'}>
                            <b>공동구매 진행률</b>
                            <Progress value={"25"}/>
                            <span>{(25/33*100).toFixed(1)}%</span>
                            <br/><br/>
                            <Button color={'primary'} onClick={()=>{history.push(getPath(`/billing/${randStr(20)}`))}}>구매</Button>
                            &nbsp; &nbsp;
                            <Button color={'info'}>장바구니에 담기</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default quickConnect(ItemSummary);