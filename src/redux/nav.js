
import {handleActions, createAction} from 'redux-actions';
import {randStr} from "../lib/utils";


//initial state is null
//must initiate in [ROOT].js
const nav= {
    vertical: true,
}

const VERTICAL= randStr(30);


export const vertical= createAction(VERTICAL);

export default handleActions({
    [VERTICAL]: (before, action)=>{
        return {
            ...before,
            vertical: !!action.payload
        }
    },
}, nav);



