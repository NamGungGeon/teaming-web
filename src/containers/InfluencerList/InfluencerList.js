import React, {Component} from 'react';
import styles from "../ItemList/ItemList.module.css";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import fullSizeIcon from "../../res/full_icon.png";
import {formatToMoney, randStr, updateState} from "../../lib/utils";
import {getPath} from "../../lib/url";

class InfluencerList extends Component {
    state= {

    }
    componentDidMount() {
        const {filters}= '';
        updateState(this, {
           influencers: [
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
               {name: '인플루언서이름', tags: ['배그', '옵치',], explain: '맡겨만주십시요열심히하겠습니다', id: randStr(20)},
           ],
        });
    }

    render() {
        const {history}= this.props;
        const {influencers}= this.state;
        return (
            <div className={styles.wrapper}>
                {
                    influencers?
                        influencers.map(influencer=>{
                            return (
                                <span onClick={()=>{history.push(getPath(`/user/influencer/${influencer.id}`))}}>
                                    <Card>
                                        <CardImg top width="100%" src={fullSizeIcon} alt="profile"/>
                                        <CardBody>
                                            <CardTitle><b>{influencer.name}</b></CardTitle>
                                            <CardSubtitle>
                                                <p className={'explain'}>
                                                    {
                                                        influencer.tags.map((value)=>{
                                                            return `#${value} `;
                                                        })
                                                    }
                                                </p>
                                            </CardSubtitle>
                                            <CardText>{influencer.explain}</CardText>
                                        </CardBody>
                                    </Card>
                                </span>
                            )
                        })
                        : '없음 ㅈㅅ ㅋ'
                }
            </div>
        );
    }
}

export default InfluencerList;