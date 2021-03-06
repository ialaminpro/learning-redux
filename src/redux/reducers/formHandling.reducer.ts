import { IUser } from "../../Interfaces/Models/users";
import { actionTypes } from "../actions/formHandling.action";

const initialState: IUser  = {
    name: 'Al Amin',
    address: 'Test',
    age: 13,
};

export function formHandling(state = initialState, action:any){
    
    switch(action.type){
        case actionTypes.SET_STATE_FORM: 
        return {
            ...state,
            [action.key]:action.payload
        }
        default:
            return state;
    }
}