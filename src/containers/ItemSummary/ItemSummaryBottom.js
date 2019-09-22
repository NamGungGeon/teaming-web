import React, {Component} from 'react';
import styles from './ItemSummaryBottom.module.css';
import BottomNavigation from "../Navigation/BottomNavigation";
import fullIcon from '../../res/full_icon.png';
import Button from "reactstrap/es/Button";

class ItemSummaryBottom extends Component {
    render() {
        const {buy, addToBucket}= this.props;
        return (
            <div>
                <BottomNavigation
                    left={(
                        <div>
                            <img src={fullIcon} alt="" className={styles.itemImg}/>
                            <div style={{float: 'left'}}>
                                <h6>
                                    상품제목
                                </h6>
                                <p className={'explain'}>
                                    상품설명
                                </p>
                            </div>
                        </div>
                    )}
                    right={(
                        <h3>
                            5,900원
                            &nbsp;&nbsp;
                            <Button color={'primary'} onClick={buy}>구매</Button>
                            &nbsp;&nbsp;
                            <Button color={'secondary'} onClick={addToBucket}>장바구니</Button>
                        </h3>
                    )}
                />
            </div>
        );
    }
}

export default ItemSummaryBottom;