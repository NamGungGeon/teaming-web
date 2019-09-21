import React, {Component} from 'react';
import longImg from "../../res/long.png";

class ItemDetail extends Component {
    render() {
        const {itemId}= this.props;
        return (
            <div>
                <div className={'centering'}>
                    <img src={longImg} alt="" style={{maxWidth: '100%'}}/>
                </div>
            </div>
        );
    }
}

export default ItemDetail;