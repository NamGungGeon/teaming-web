import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";

class Deving extends Component {
    render() {
        return (
            <div className={'centering'}>
                <img src="https://png.pngtree.com/svg/20140418/break_fix_904402.png" alt="" width={'300px'}/>
                <PageTitle title={'개발중인 기능입니다'} explain={'다음에 다시 만나용'}/>
            </div>
        );
    }
}

export default Deving;