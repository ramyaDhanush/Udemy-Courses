import React from 'react'
import './CardList.style.css'
import Card from '../Card/Card.component'
const CardList = ({monster}) => {
  return (
    <div className="card-list">
      {monster.map(el => <Card key={el.id} monster={el}/>)}
    </div>
  )
}

export default CardList
