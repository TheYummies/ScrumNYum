import React from 'react';

function Card(props) {
  console.log(props.cards)
  const dragStart = event => {
    const target = event.target;

    event.dataTransfer.setData('card_id', target.id);
  }

  const dragOver = event => {
    event.stopPropagation();
  }

  return (
    <div className='stickie' id={props.id} onDragStart={dragStart} onDragOver={dragOver} draggable='true'>
      {/* generic label that don't know children ahead of time */}
      {props.children}
      {/* displays the map prop drilled from scrum?? (card) */}
    </div>
  )
}

export default Card;