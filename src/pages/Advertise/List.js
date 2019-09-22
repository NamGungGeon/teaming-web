import React, {Component} from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import Input from "reactstrap/es/Input";
import ItemList from "../../containers/ItemList/ItemList";
import InfluencerList from "../../containers/InfluencerList/InfluencerList";

class List extends Component {
    state={

    };

    render() {
        const {history, match}= this.props;
        return (
            <div className={'guideLine'}>
                <div>
                    <PageTitle title={'인플루언서 매칭'} explain={'광고에 적합한 인플루언서를 직접 선택하실 수 있습니다'} centering/>

                    <InputGroup>
                        <span className={'blank'}></span>
                        <span className={'blank'}></span>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                카테고리
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem>Some Action</DropdownItem>
                                <DropdownItem disabled>Action (disabled)</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Foo Action</DropdownItem>
                                <DropdownItem>Bar Action</DropdownItem>
                                <DropdownItem>Quo Action</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Input type={'text'} placeholder={"상품명으로 검색"}/>
                        <InputGroupAddon className={'clickable'}>
                            <InputGroupText>
                                검색
                            </InputGroupText>
                        </InputGroupAddon>
                        <span className={'blank'}></span>
                        <span className={'blank'}></span>
                    </InputGroup>
                </div>
                <br/>
                <div className={'righting'}>

                </div>
                <br/><br/>

                <InfluencerList history={history}/>

            </div>
        );
    }
}

export default List;