
import React from 'react'

export const Person = ({name,age,image}) => {
 
  return (
    <>
      <div>
        <div className='person'>
          <img src={image} alt='name'></img>
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </div>
      </div>
    </>
  )
}
