import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "reactstrap/es/Button";
import document from '../../res/document.png';
import {quickConnect} from "../../redux";
import Table from "reactstrap/es/Table";
import {formatToMoney, getDays, randStr} from "../../lib/utils";
import Progress from "reactstrap/es/Progress";
import moment from "moment";


class View extends Component {
    ad= {
        name: '123광고이름테스트123',
        marketer: '광고주명',
        marketerId: randStr(20),
        influencer: '인플루언서명',
        influencerId: randStr(20),
        link: 'http://naver.com',
        img: '',
        catalog: '',
        startDate: '2019-09-01',
        endDate: '2019-09-30',
        current: 35500,
        dest: 355555,
        money: 1525225,
    };
    basicInfo= ()=>{
        const {ad}= this;
        return (
            <div>
                <h5>개요</h5>
                <br/>
                <Table className={'noHead'}>
                    <tbody>
                    <tr>
                        <td>광고주</td>
                        <td>
                            <span>{ad.marketer}</span>
                            &nbsp;
                            <Button size={'sm'} color={'primary'}>문의</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>인플루언서</td>
                        <td>
                            <span>{ad.influencer}</span>
                            &nbsp;
                            <Button size={'sm'} color={'primary'}>문의</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>광고 링크</td>
                        <td>
                            <a href={ad.link}>{ad.link}</a>
                            &nbsp;
                            <Button size={'sm'} color={'primary'}>복사</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>기간</td>
                        <td>
                            {`
                                            ${ad.startDate} ~ ${ad.endDate}
                                        `}
                        </td>
                    </tr>
                    <tr>
                        <td>목표치</td>
                        <td>
                            {
                                formatToMoney(ad.dest)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>계약금액</td>
                        <td>
                            {
                                formatToMoney(ad.money)
                            }원
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>

        );
    };
    progressStatus= ()=>{
        const {ad}= this;
        const format= 'YYYY-MM-DD';

        const leftDays= ()=>{
            if(moment().isBefore(moment(ad.startDate, format)))
                return -1;

            return Math.abs(moment().diff(moment(ad.endDate, format)));
        }
        const leftDayCnt= leftDays()<0? -1: getDays(leftDays());
        const progressDate= ()=>{
            if(leftDayCnt< 0)
                return 0;

            const entire= Math.abs(moment(ad.startDate, format).diff(moment(ad.endDate, format)));
            return parseInt((entire-leftDays())/entire* 100);
        };

        return (
            <div>
                <h5>진행상황</h5>
                <br/>
                <Table className={'noHead'}>
                    <tbody>
                        <tr>
                            <td>계약기간</td>
                            <td className={'righting'}>
                                <Progress value={progressDate()}/>
                                {`${leftDayCnt}일 남음 (${ad.startDate} ~ ${ad.endDate})`}
                            </td>
                        </tr>
                        <tr>
                            <td>달성률</td>
                            <td className={'righting'}>
                                <Progress value={parseInt(ad.current/ad.dest*100)}/>
                                {`${parseInt(ad.current/ad.dest*100)}% (${ad.current}/${ad.dest})`}
                            </td>
                        </tr>
                        <tr>

                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    render() {
        const {history, match, uiKit}= this.props;
        const {ad}= this;

        return (
            <div className={'lefting'}>
                <PageTitle title={'광고 상세정보'} explain={'이 페이지는 담당 광고주와 인플루언서에게만 보여집니다'} noMargin/>
                <div>
                    <Button color={'primary'} onClick={()=>{history.push(`${match.url}/statistics`)}}>통계 보기</Button>
                    &nbsp;
                    <Button color={'info'} onClick={()=>{
                        uiKit.popup.make((
                            <div className={'centering'}>
                                <h3>계약서</h3>
                                <div>
                                    <Button color={'primary'}>다운로드</Button>
                                </div>
                                <br/>

                                <img src={document} alt=""/>
                            </div>
                        ))
                    }}>계약서 보기</Button>
                </div>
                <br/>

                <div className={'flexBox'}>
                    {this.basicInfo()}
                    {this.progressStatus()}
                </div>
                <div className={'border-box'}>
                    <h5>리소스</h5>
                </div>
            </div>
        );
    }
}

export default quickConnect(View);