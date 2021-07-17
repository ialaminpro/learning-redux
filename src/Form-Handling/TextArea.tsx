import React, { Component } from 'react'
import { connect } from 'react-redux';
import { IUser } from '../Interfaces/Models/users';
import { mapDispatchToProps as mapDispatchToPropsTextArea} from '../redux/mappings/dispatcher/FormHandling.dispatcher';
import { mapStateToProps as mapStateToPropsTextArea} from '../redux/mappings/state/FormHandling.state';

interface IProps {
    FormState : IUser,
    setStateForm: any
}

class TextArea extends Component <IProps, any> {
    render() {
        return (
            <React.Fragment>
                
                <textarea name="textarea" value={this.props.FormState.address} onChange={(e:any)=>{this.props.setStateForm('address', e.target.value)}}  />
                <input name="name" value={this.props.FormState.name} onChange={(e:any)=>{this.props.setStateForm('name', e.target.value)}}  />
                <input name="age" value={this.props.FormState.age} onChange={(e:any)=>{this.props.setStateForm('age', e.target.value)}}  />
                
            </React.Fragment>
        )
    }
}



export default connect(mapStateToPropsTextArea, mapDispatchToPropsTextArea)(TextArea);