import React, { Component } from 'react';

class Radio extends Component {
    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={()=>this.props.onCheck(this.props.name)} />
                <label className="form-check-label" for="flexRadioDefault1">{this.props.name}</label>
            </div>
        );
    }
}

export default Radio;