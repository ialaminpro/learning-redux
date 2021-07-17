import React, { Component } from 'react'
import { connect } from 'react-redux';
import { mapStateToProps as mapStateToPropsTextArea} from '../redux/mappings/state/FormHandling.state';

class Preview extends Component <any, any> {
    render() {
        return (
            <React.Fragment>
                {this.props.name} <br/>
                {this.props.age}<br/>
                {this.props.address}
            </React.Fragment>
        )
    } 
}

export default connect(mapStateToPropsTextArea)(Preview);
