import React from 'react'
import Pledge from './Pledge.jsx'

const PledgesList = (props) => {
  return (
    <div>
      {props.pledges.map((pledge) => {
        return <Pledge pledge={pledge} key={pledge._id}/>
      })}
    </div>
  )
}

export default PledgesList