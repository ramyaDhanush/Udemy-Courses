import React from 'react'
import './Card.style.css'

const Card = ({monster}) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${monster.id}/?set=set2&size=180x180`} alt="monster"/>
      <h2>{monster.name}</h2>
      <div>{monster.email}</div>
    </div>
  )
}

export default Card
