import { actionTypes } from "../actions/formHandling.action";

const initialState  = {
    name: 'Al Amin',
    address: 'Test',
};

export function formHandling(state = initialState, action:any){
    
    switch(action.type){
        case actionTypes.HANDLE_CHANGE_ADDRESS: 
        return {
            ...state,
            address:action.payload
        }
        case actionTypes.HANDLE_CHANGE_NAME: 
        return {
            ...state,
            name:action.payload
        }
        default:
            return state;
    }
}