import React, {Component} from 'react';
import Table from "reactstrap/es/Table";
import {formatToMoney} from "../../lib/utils";
import {Progress} from "reactstrap";

class Spec extends Component {
    history= [
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12426421,
            dest: 133332,
            type: 'banner'
        },
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12426421,
            dest: 133332,
            type: 'banner'
        },
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12426421,
            dest: 133332,
            type: 'banner'
        },
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12313,
            dest: 133332,
            type: 'funding'
        },
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12426421,
            dest: 133332,
            type: 'funding'
        },
        {
            ader: '광고주',
            adname: '광고이름',
            admoney: 2500000,
            start: '2019-09-01',
            end: '2019-09-30',
            clicked: 12426421,
            dest: 133332,
            type: 'funding'
        },

    ];

    buildSpecTable= (type)=>{
        return (
            <Table>
                <thead>
                <tr>
                    <td>광고주</td>
                    <td>광고명</td>
                    <td>계약금액</td>
                    <td>시작일</td>
                    <td>마감일</td>
                    <td>완수율</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.history.map((h)=>{
                        if(h.type=== type)
                            return (
                                <tr>
                                    <td>{h.ader}</td>
                                    <td>{h.adname}</td>
                                    <td>{formatToMoney(h.admoney)}원</td>
                                    <td>{h.start}</td>
                                    <td>{h.end}</td>
                                    <td>
                                        <Progress value={parseInt(h.clicked/h.dest *100)} />
                                        {parseInt(h.clicked/h.dest *100)}%
                                    </td>
                                </tr>
                            );
                    })
                }
                </tbody>
            </Table>);
    }

    render() {
        return (
            <div>
                <h3>광고 이력</h3>
                <p className={'explain'}>
                    총 {this.history.length}개의 광고를 진행했습니다 (이 정보는 광고주에게 보여집니다)
                </p>
                <br/>

                <h5>배너(링크)형 광고</h5>
                {this.buildSpecTable('banner')}
                <br/>

                <h5>공동구매형 광고</h5>
                {this.buildSpecTable('funding')}
                <br/>

            </div>
        );
    }
}

export default Spec;