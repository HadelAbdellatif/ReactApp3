import React from 'react'

export default function Input(props) {
const {id, title, type, handelData} = props;

  return (
<div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className="form-control" id={props.id} onChange={props.handelData}/>
    </div>  
    )
}
