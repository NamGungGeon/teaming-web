import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";

class Buy extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'구매 이력'} explain={'최대 60일까지 보관됩니다'} noMargin/>
                <br/>
            </div>
        );
    }
}

export default Buy;