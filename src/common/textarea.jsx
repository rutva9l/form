import React from 'react';

const Textarea = (props) => {
    const {name, onChange, label} = props;
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <label for={name}>{label}</label>
            <textarea id={name} name={name} rows="4" cols="50" placeholder="sumn..." onChange={e => onChange(e.target)} />
        </div>
    );
}

export default Textarea;