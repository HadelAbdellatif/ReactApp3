import React from 'react'

export default function Input(props) {
const {id, title, type, handelData, name} = props;

  return (
<div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className="form-control" id={id} onChange={handelData}/>
    </div>  
    )
}
