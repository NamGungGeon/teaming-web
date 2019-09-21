import React, {Component} from 'react';
import {
    Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import Input from "reactstrap/es/Input";
import ItemList from "../../containers/ItemList/ItemList";
import classNames from 'classnames';
import PageTitle from "../../components/PageTitle/PageTitle";
import {randStr} from "../../lib/utils";

class List extends Component {
    state= {
        items: [
            {
                title: '상품!',
                price: 5000,
                text: '이 상품은 너무 조아용',
                seller: '판매자',
                score: 4.5,
                id: randStr(30),
            },
            {
                title: '상품!',
                price: 5000,
                text: '이 상품은 너무 조아용',
                seller: '판매자',
                score: 4.5,
                id: randStr(30),
            },
            {
                title: '상품!',
                price: 5000,
                text: '이 상품은 너무 조아용',
                seller: '판매자',
                score: 4.5,
                id: randStr(30),
            },
            {
                title: '상품!',
                price: 5000,
                text: '이 상품은 너무 조아용',
                seller: '판매자',
                score: 4.5,
                id: randStr(30),
            },
            {
                title: '상품!',
                price: 5000,
                text: '이 상품은 너무 조아용',
                seller: '판매자',
                score: 4.5,
                id: randStr(30),
            },


        ],
    }

    render() {
        const {history, match}= this.props;
        return (
            <div className={'guideLine'}>
                <div>
                    <PageTitle title={'마켓'} explain={'와! 게이밍기어! 신발보다 싸다!'} centering/>

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

                <ItemList items={this.state.items} match={match} history={history}/>

            </div>
        );
    }
}

export default List;