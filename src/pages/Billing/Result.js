import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "reactstrap/es/Button";
import {getPath} from "../../lib/url";

class Result extends Component {
    render() {
        const {history}= this.props;
        return (
            <div>
                <PageTitle title={'결제가 성공적으로 완료되었습니다'} explain={'티밍을 이용해주셔서 감사합니다!'} centering/>
                <div className={'centering'}>
                    <Button color={'primary'} onClick={()=>{
                        history.push(getPath('/mypage/buy'));
                    }}>
                        구매내역으로 이동
                    </Button>
                </div>
            </div>
        );
    }
}

export default Result;