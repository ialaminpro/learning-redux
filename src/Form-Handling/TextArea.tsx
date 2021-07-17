import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionTypes } from '../redux/actions/formHandling.action';

class TextArea extends Component <any, any> {
    render() {
        return (
            <React.Fragment>
                
                <textarea name="textarea" value={this.props.address} onChange={(e:any)=>{this.props.setAddress(e.target.value)}}  />
                <input name="name" value={this.props.name} onChange={(e:any)=>{this.props.setName(e.target.value)}}  />
                
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state:any) => {
    return {
        address: state.formHandling.address,
        name: state.formHandling.name,
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return {
        setAddress: (value:any) => {
            dispatch({
                type: actionTypes.HANDLE_CHANGE_ADDRESS,
                payload: value
            })
        },
        setName: (value:any) => {
            dispatch({
                type: actionTypes.HANDLE_CHANGE_NAME,
                payload: value
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);