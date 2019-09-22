
import {handleActions, createAction} from 'redux-actions';
import {delay, randStr} from "../lib/utils";
import Cookies from "universal-cookie";


const cookie= new Cookies();
const initAuth= (newEmail, newToken)=>{
    return{
        email: 'rndrjs123@naver.com',
        token: randStr(30)
    }

    const email= newEmail? newEmail: cookie.get('email');
    const token= newToken? newToken: cookie.get('token');
    if((email && token) && (email!=='null' && token!=='null'))
        return {
            email, token
        };
    else
        return null;
}
const user= initAuth();

const LOGIN= randStr(30);
const LOGOUT= randStr(30);

export const login= createAction(LOGIN);
export const logout= createAction(LOGOUT);

export default handleActions({
    [LOGIN]: (beforeAuth, action)=>{
        const {email, token}= action.payload;
        return initAuth(email, token);
    },
    [LOGOUT]: ()=>{
        cookie.set('email', null);
        cookie.set('token', null);
        return null;
    },
}, user);



