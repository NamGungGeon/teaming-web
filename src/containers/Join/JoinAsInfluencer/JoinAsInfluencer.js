import React, {Component} from 'react';
import styles from './JoinAsInfluencer.module.css';
import {quickConnect} from "../../../redux";
import {Badge, Button, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import {checkEmail, delay, updateState} from "../../../lib/utils";
import {getPath} from "../../../lib/url";

class JoinAsInfluencer extends Component {
    componentDidMount() {
        this.props.NavDispatcher.vertical(true);
    }

    state= {
        email: '',
        pw: '',
        pwCheck: '',
        name: '',
        isMan: true,
        phone: '',
        phoneAuth: '',

        step: 0,
    };

    nextStep= async ()=>{
        const {step}= this.state;
        const {uiKit}= this.props;

        if(!this.steps[step].check())
            return;

        uiKit.loading.start();
        await delay(1000);
        uiKit.loading.end();

        if(step+1 === this.steps.length){
            uiKit.popup.make(
                (<div>
                    <h3>가입이 완료되었습니다</h3>
                    <p>입력하신 이메일 주소로 가입 메일이 발송되었습니다</p>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        <Button
                            onClick={()=>{
                                this.props.history.push(getPath('/'));
                                this.props.uiKit.popup.destroy();
                            }}
                            color={'primary'}>
                            홈으로 돌아가기
                        </Button>
                    </div>
                </div>)
            , false);
            return;
        }

        this.setState({
            ...this.state,
            step: step+1,
        });
    };

    steps= [
        {
            view: (
                <div className={styles.form}>
                    <FormGroup>
                        <Label for={"email"}>이메일</Label>
                        <Input type={"email"} name={"email"} id={"email"}
                               placeholder={"이메일을 입력하세요"}
                               onChange={(e)=>{
                                   updateState(this, {email: e.target.value});
                               }}/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for={"pw"}>비밀번호</Label>
                        <Input type={"password"} name={"pw"} id={"pw"}
                               placeholder={"비밀번호를 입력하세요"}
                               onChange={(e)=>{
                                   updateState(this, {pw: e.target.value});
                               }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={"pwCheck"}>비밀번호 확인</Label>
                        <Input type={"password"} name={"pwCheck"} id={"pwCheck"}
                               placeholder={"위의 비밀번호와 동일하게 입력하세요"}
                               onChange={(e)=>{
                                   updateState(this, {pwCheck: e.target.value});
                               }}/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <Label for={"name"}>실명</Label>
                        <Input type={"text"} name={"name"} id={"name"}
                               placeholder={"이름 입력하세요"}
                               onChange={(e)=>{
                                   updateState(this, {name: e.target.value});
                               }}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>성별</Label>
                        <br/>
                        <FormGroup check>
                            <Label for={"gender"}>
                                <Input type={"radio"} name={"gender"} id={"gender"}
                                       onChange={(e)=>{
                                           this.setState({
                                               ...this.state,
                                               isMan: true,
                                           })
                                       }}/>
                                남
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label for={"gender"}>
                                <Input type={"radio"} name={"gender"} id={"gender"}
                                       onChange={(e)=>{
                                           this.setState({
                                               ...this.state,
                                               isMan: false,
                                           })
                                       }}/>
                                여
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label>휴대폰</Label>
                        <InputGroup>
                            <Input type={'tel'} placeholder={"-없이 입력하세요"}/>
                            <InputGroupAddon className={'clickable'}>
                                <InputGroupText>
                                    인증
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                        <Input type={'number'} placeholder={"인증번호를 입력하세요"}/>
                    </FormGroup>
                    <br/><br/>
                    <Button color={'primary'} block
                            onClick={this.nextStep}>
                        완료
                    </Button>
                </div>
            ),
            check: ()=>{
                const {uiKit}= this.props;
                const {email, pw, pwCheck, name, phone, phoneAuth}= this.state;
                return true;

                if(!checkEmail(email)){
                    uiKit.toaster.cooking('올바른 이메일 형식이 아닙니다');
                    return false;
                }
                if(!pw || pw!== pwCheck){
                    uiKit.toaster.cooking('비밀번호를 다시 확인하세요');
                    return false;
                }
                if(!name){
                    uiKit.toaster.cooking('이름을 입력하세요');
                    return false;
                }

                return true;
            }
        },

    ];

    render() {
        return (
            <div className={'guideLine guide-small'}>
                <h3>회원 가입<Badge color={'primary'}>인플루언서</Badge></h3>
                <br/>
                {
                    this.steps[this.state.step] && this.steps[this.state.step].view
                }
            </div>
        );
    }
}

export default quickConnect(JoinAsInfluencer);