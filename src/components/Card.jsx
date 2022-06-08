import React from 'react'

const Card = ({userRandom, colorRandom, clickButton}) => {
//console.log(Object.keys(userRandom))

const styleButton = {backgroundColor: colorRandom }

  return (
    <article className='card' style={{color: colorRandom}}>
        <h2 className='card__title'>Name: {userRandom.name}</h2>
        <ul className='card__list'>
            <li>
                <b className='card__b'>Company Name: </b> 
                {userRandom.company.name}
            </li>
            <li>
                <b className='card__b'>City: </b> 
                {userRandom.address.city}
            </li>
            <li>
                <b className='card__b'>Website: </b> 
                {userRandom.website} 
            </li>
        </ul>
        <button 
            style={styleButton} 
            className='card__btn' 
            onClick={clickButton}>
        &#62;
        </button>
    </article>
  )
}

export default Card