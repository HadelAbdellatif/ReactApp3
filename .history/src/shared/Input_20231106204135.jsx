import React from 'react'

export default function Input(props) {
  return (
<div className="mb-3">
    <label htmlFor="password" className="form-label">user password</label>
    <input type="password" name='password' className="form-control" id="password" onChange={handelData}/>
    </div>  
    )
}
