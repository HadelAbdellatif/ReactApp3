import React from 'react'

export default function Input(props) {
  return (
<div className="mb-3">
    <label htmlFor={props.id} className="form-label">{props.title}</label>
    <input type="password" name='password' className="form-control" id="password" onChange={handelData}/>
    </div>  
    )
}
