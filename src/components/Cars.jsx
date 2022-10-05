import React from 'react'

const Cars = ({props}) => {
    console.log(props)
  return (
    <article className='card'>
          <h3>id :{props.id}</h3>
          <ul>
            <li><span>brand :</span>{props?.brand}</li>
            <li><span>model :</span>{props?.model}</li>
            <li><span>color :</span>{props?.color}</li>
            <li><span>year :</span>{props?.year}</li>
            <li><span>price :</span>{props?.price}</li>
          </ul>
          <button>edit</button>
          <button>delete</button>
    </article>
  )
}

export default Cars