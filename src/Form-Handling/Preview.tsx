import React, { Component } from 'react'
import { connect } from 'react-redux';
import { mapStateToProps as mapStateToPropsTextArea} from '../redux/mappings/state/FormHandling.state';

class Preview extends Component <any, any> {
    render() {
        return (
            <React.Fragment>
                {this.props.FormState.name} <br/>
                {this.props.FormState.age}<br/>
                {this.props.FormState.address}
            </React.Fragment>
        )
    } 
}

export default connect(mapStateToPropsTextArea)(Preview);
