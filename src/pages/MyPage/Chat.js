import React, {Component} from 'react';
import ChatPreview from "../../components/Chat/ChatPreview";

class Chat extends Component {
    chats= [
        {profile: null, name: '광고주', content: '광고좀받아주십시요..', notRead: 13},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..', notRead: 13},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..'},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..'},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..'},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..'},
        {profile: null, name: '광고주', content: '광고좀받아주십시요..'},
    ];

    render() {
        return (
            <div>
                <h3>대화</h3>
                <p className={'explain'}>
                    {this.chats.length}개의 대화를 진행중입니다
                </p>
                <br/>
                {
                    this.chats && this.chats.map(value=>{
                        return (
                            <ChatPreview preview={value}/>
                        )
                    })
                }
                <span className={'floatingBtn'}><b>+</b></span>
            </div>
        );
    }
}

export default Chat;