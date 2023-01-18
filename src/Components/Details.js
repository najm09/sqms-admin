import React from 'react'
import Patients from './Patients'
import Users from './Users'

const Details = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', margin : '1em'}}>
      <Patients/>
      <Users/>
    </div>
  )
}

export default Details