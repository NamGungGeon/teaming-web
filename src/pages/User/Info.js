import React, {Component} from 'react';
import {quickConnect} from "../../redux";
import PageTitle from "../../components/PageTitle/PageTitle";

class Info extends Component {
    render() {
        const {match, history}= this.props;
        const {type, id}= match.params;

        return (
            <div className={'lefting padding-normal'}>
                <PageTitle title={'유저 정보'} explain={'인플루언서 정보를 표시합니다'} noMargin/>
            </div>
        );
    }
}

export default quickConnect(Info);