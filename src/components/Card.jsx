import React, { useState } from 'react'
import data from '../data'
import { Person } from './Person'


export const Card = () => {
 const [list,setList] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{list.length} Birthdays Today</h3>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <Person  {...item} />
              </li>
            )
          })}
        </ul>
        <button className=' btn btn-block' onClick={() => setList([])}>
          clear all
        </button>
      </section>
    </main>
  )
}
