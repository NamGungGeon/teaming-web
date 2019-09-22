
import React from 'react';
import Popup from "../../components/Popup/Popup";
import {randStr} from "../utils";

export const PopupMaker= (component)=>{
    const prefix= randStr();
    const ret= {
        make: (content, preventClose)=>{
            component.setState({
                ...component.state,
                ['popupContent'+ prefix]: content? content: '',
                ['popupPreventClose'+ prefix]: !preventClose,
            });
        },
        destroy: ()=>{
            component.setState({
                ...component.state,
                ['popupContent'+ prefix]: ''
            });
        },
        render: ()=>{
            return component.state['popupContent'+ prefix]?
                (<Popup contents={component.state['popupContent'+ prefix]}
                        plzClose={()=>{
                            if(component.state['popupPreventClose'+prefix])
                                ret.destroy();
                        }}
                />): '';
        },
    }
    return ret;
};