import React from 'react'

export default function Input(props) {
const

  return (
<div className="mb-3">
    <label htmlFor={props.id} className="form-label">{props.title}</label>
    <input type={props.type} name={props.name} className="form-control" id={props.id} onChange={props.handelData}/>
    </div>  
    )
}
