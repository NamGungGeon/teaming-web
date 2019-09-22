import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {formatToMoney, randStr, updateState} from "../../lib/utils";
import {Button, Input, Progress, Table} from "reactstrap";
import smallImg from '../../res/simple_icon.png';
import Label from "../../containers/Join/JoinAsInfluencer/JoinAsInfluencer";
import BottomNavigation from "../../containers/Navigation/BottomNavigation";

class Bucket extends Component {
    bucketList= [
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
        {itemId: randStr(20), itemName: '상품명', price: 5000, count: 3, },
    ];

    render() {
        return (
            <div>
                <PageTitle title={'장바구니'} explain={'장바구니에 담긴 상품입니다'} noMargin/>
                <br/>

                <Table>
                    <thead>
                    <tr>
                        <td>선택</td>
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
                        this.bucketList.map((v)=>{
                            return (
                                <tr>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td><img src={smallImg} alt="" width={'100px'}/></td>
                                    <td>{v.itemName}</td>
                                    <td>{formatToMoney(v.price)}원</td>
                                    <td>{v.count}</td>
                                    <td>{formatToMoney(v.price*v.count)}원</td>
                                    <td>
                                        <Button color={'primary'} size={'sm'} style={{marginBottom: '4px'}}>
                                            즉시구매
                                        </Button>
                                        <br/>
                                        <Button color={'secondary'} size={'sm'}>
                                            삭제
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>
                <br/><br/><br/><br/><br/><br/>
                <BottomNavigation
                    left={(
                        <div>
                            <h5>선택한 상품의 총 가격</h5>
                            <h3 style={{fontWeight: 800, color: '#FF0174'}}>59,000원</h3>
                        </div>
                    )}
                    right={(
                        <div>
                            <Button color={'primary'}>
                                결제하기
                            </Button>
                        </div>
                    )}/>
            </div>
        );
    }
}

export default Bucket;