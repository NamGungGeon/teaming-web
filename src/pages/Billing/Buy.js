import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "reactstrap/es/Button";

class Buy extends Component {
    render() {
        const {history, match}= this.props;
        return (
            <div>
                <PageTitle title={'결제 페이지'} explain={'선택한 상품에 대한 결제 페이지입니다'} centering/>

                <div className={'centering'}>
                    <Button color={'primary'} onClick={()=>{history.push(`${match.url}/result`)}}>
                        아무튼돈냈음
                    </Button>
                </div>
            </div>
        );
    }
}

export default Buy;