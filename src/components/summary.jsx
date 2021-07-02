import React, { Component } from 'react';

const Summary = ({details}) => {
    return (
        <div>
            <div>Your text: {details.data.text}</div>
            <div>Destination: {details.radio}</div>
            <div>Cities: </div>
            {details.checkboxName.map(name=> <div>{name}</div>)}
            <div>Your suggestions: {details.data.suggestion}</div>
        </div>
    );
}
 
export default Summary;