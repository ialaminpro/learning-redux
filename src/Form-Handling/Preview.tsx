import React, { Component } from 'react'
import { connect } from 'react-redux';

class Preview extends Component <any, any> {
    render() {
        return (
            <React.Fragment>
                {this.props.name} <br/>
                {this.props.address}
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

export default connect(mapStateToProps)(Preview);
