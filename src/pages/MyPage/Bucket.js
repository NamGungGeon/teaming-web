import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";

class Bucket extends Component {
    render() {
        return (
            <div>
                <PageTitle title={'장바구니'} explain={'ㄴ'} noMargin/>
                <br/>
            </div>
        );
    }
}

export default Bucket;