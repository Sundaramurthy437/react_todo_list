import React from 'react'
import LineItems from './LineItems';

const ListItems = ({places1, handleCheck, handleDelete}) => {
  return (
    <ul>
          {places1.map((newItem) => (
            <LineItems 
              newItem={newItem}
              key={newItem.id}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
  )
}

export default ListItems