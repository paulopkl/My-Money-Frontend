import React from 'react';

function Input(props) {
    return (
        <input {...props.input} className="form-control" placeholder={props.placeholder} 
            readOnly={props.readOnly} type={props.type} />
    );
}

export default Input;