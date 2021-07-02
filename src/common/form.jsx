import React, { Component } from 'react';
import Input from '../common/input';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };
    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, { abortEarly: false }); //takes in the object to be validated and the schema
        const errors = {};
        if (!error) return null;
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }
    validateProp = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema, { abortEarly: false });
        return error ? error.details[0].message : null;
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        errors === null ? console.log('submitted') : console.log(errors);
        this.doSubmit();
    }
    handleChange = ({ currentTarget }) => {
        const errors = { ...this.state.errors }
        const message = this.validateProp(currentTarget);
        if (message) errors[currentTarget.name] = message;
        else delete errors[currentTarget.name];
        const data = { ...this.state.data };
        data[currentTarget.name] = currentTarget.value;
        this.setState({ data, errors });
    }
    renderInput(name,label,type){
        const { data, errors } = this.state;
        return(
            <Input name={name} value={data[name]} label={label} error={errors[name]} type={type} onChange={this.handleChange} />
        )
    }
    renderBtn = label => {
        return <button disabled={this.validate()} style={{ marginTop: 20 }} className="btn btn-primary">{label}</button>
    }
}

export default Form;