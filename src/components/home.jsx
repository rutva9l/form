import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser';
import Radio from '../common/radio';
import Checkbox from './checkbox';
import Textarea from '../common/textarea';
import Summary from './summary';

class Home extends Form {
    state = {
        data: { text: "", suggestion:""},
        radio: "",
        errors: {},
        checkboxName:[],
        checkbox: "",
        checkboxValid: false,
        count: 0
    };
    schema = {
        text: Joi.string().label("Text"),
        suggestion: Joi.string().label("Suggestion")
    }
    handleCheck = (radio) => {
        console.log(radio);
        this.setState({ radio });
    }
    
    handleTextarea = ({value}) =>{
        const data = { ...this.state.data };
        data.suggestion = value;
        this.setState({data});
    }

    validateForm = () => {
        const { checkboxValid } = this.state;
        this.setState({
            formValid: checkboxValid
        });
    };

    updateCheckbox = ({ name, checked }) => {
        const names=[...this.state.checkboxName];
        if(checked) names.push(name)
        else names.pop(name);
        this.setState({checkboxName:names});
        this.setState(
            (prev) => ({
                checkbox: checked,
                count: checked ? prev.count + 1 : prev.count - 1
            }),
            this.validateCheckbox
        );
    };

    validateCheckbox = () => {
        let checkboxValid = true;
        let errors = { ...this.state.errors };
        if (this.state.count < 1) {
            checkboxValid = false;
            errors.checkbox = "Please select atleast 1 checkbox";
        }
        this.setState({ checkboxValid, errors }, this.validateForm);
    };

    doSubmit = () => {
        this.setState({summary:true});
    }
    success=()=>{
        this.props.history.push("/submitted");
    }

    render() {
        const {checkboxValid, errors, radio, formValid, summary} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("text", "Text", "text")}
                <div style={{ display: "flex", margin: "10px 0px", width: "20%", justifyContent: "space-between" }}>
                    <Radio name="Beach" onCheck={this.handleCheck} />
                    <Radio name="Mountains" onCheck={this.handleCheck} />
                </div>
                {radio && <Checkbox onChange={this.updateCheckbox} radio={radio} />}
                {!checkboxValid && errors.checkbox && <div className="alert alert-danger">{errors.checkbox}</div> }
                <Textarea name="suggestion" onChange={this.handleTextarea} label="Your suggestions" />
                {summary && <Summary details={this.state} />}
                {!summary && <button disabled={!formValid && this.validate()} style={{ marginTop: 20 }} className="btn btn-primary">Continue</button>}
                {summary && <button disabled={!formValid && this.validate()} style={{ marginTop: 20 }} className="btn btn-primary" onClick={this.success}>Submit</button>}
            </form >
        );
    }
}

export default Home;