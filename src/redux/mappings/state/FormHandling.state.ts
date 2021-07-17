import { IUser } from "../../../Interfaces/Models/users"

export const mapStateToProps = (state:any): {FormState: IUser} => {
    return {FormState: state.formHandling }
}