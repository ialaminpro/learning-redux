import { actionTypes } from "../../actions/formHandling.action"

export const mapDispatchToProps = (dispatch:any) =>{
    return {
        setStateForm: (key:any, value:any) => {
            dispatch({
                type: actionTypes.SET_STATE_FORM,
                key: key,
                payload: value
            })
        }
    }
}