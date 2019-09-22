import React, {Component} from 'react';
import smallImg from "../../res/simple_icon.png";
import {formatToMoney} from "../../lib/utils";
import {Button, Table} from "reactstrap";
import PageTitle from "../../components/PageTitle/PageTitle";
import moment from "moment";

class Request extends Component {
    requests= [
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
        {sender: '광고주', title: '광고제목', sendDate: moment(), type: '배너', period: '광고기간', money: 30000},
    ];

    render() {
        return (
            <div>
                <PageTitle title={'요청 관리'} explain={'도움말'} noMargin/>
                <br/>

                <Table>
                    <thead>
                    <tr>
                        <td>보낸이</td>
                        <td>제목</td>
                        <td>요청 날짜</td>
                        <td>타입</td>
                        <td>계약기간</td>
                        <td>계약금</td>
                        <td>옵션</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.requests.map((request)=>{
                            return (
                                <tr className={'clickable'}>
                                    <td>{request.sender}</td>
                                    <td>{request.title}</td>
                                    <td>{request.sendDate.format('YYYY-MM-DD')}</td>
                                    <td>{request.type}</td>
                                    <td>{request.period}</td>
                                    <td>{formatToMoney(request.money)}</td>
                                    <td>
                                        <Button size={'sm'} color={'primary'}>수락</Button>
                                        &nbsp;
                                        <Button size={'sm'} color={'danger'}>거절</Button>
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

export default Request;