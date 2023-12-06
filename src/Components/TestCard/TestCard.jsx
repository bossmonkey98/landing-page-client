import React from 'react'
import "./TestCard.css"

export const TestCard = ({name,role,desc}) => {
  console.log(desc)
  return (
    <div className='wrapper'>
        <div>
            <span className='name'>{name}</span>
            <span className='role'>{role}</span>
        </div>
        <div className='desc'>
            {desc}
        </div>
    </div>
  )
}

