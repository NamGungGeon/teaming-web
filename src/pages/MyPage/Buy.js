import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {Button, Table} from "reactstrap";
import smallImg from "../../res/simple_icon.png";
import {formatToMoney, randStr} from "../../lib/utils";
import BottomNavigation from "../../containers/Navigation/BottomNavigation";
import moment from "moment";

class Buy extends Component {
    buyList= [
        {date: moment(), itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {date: moment(), itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {date: moment(), itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {date: moment(), itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {date: moment(), itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
    ]
    render() {
        return (
            <div>
                <PageTitle title={'구매 이력'} explain={'최대 60일까지 보관됩니다'} noMargin/>
                <br/>

                <Table>
                    <thead>
                    <tr>
                        <td>구매일자</td>
                        <td>상품 이미지</td>
                        <td>상품명</td>
                        <td>개당 가격</td>
                        <td>수량</td>
                        <td>총 가격</td>
                        <td>옵션</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.buyList.map((v)=>{
                            return (
                                <tr>
                                    <td>{v.date.format('YYYY-MM-DD')}</td>
                                    <td><img src={smallImg} alt="" width={'100px'}/></td>
                                    <td>{v.itemName}</td>
                                    <td>{formatToMoney(v.price)}원</td>
                                    <td>{v.count}</td>
                                    <td>{formatToMoney(v.price*v.count)}원</td>
                                    <td>
                                        <Button color={'primary'} size={'sm'}>배송추적</Button>
                                        <br/>
                                        <Button color={'info'} size={'sm'}style={{margin: '4px 0'}}>구매확정</Button>
                                        <br/>
                                        <Button color={'secondary'} size={'sm'}>환불요청</Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Buy;