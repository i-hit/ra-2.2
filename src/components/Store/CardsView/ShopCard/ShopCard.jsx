import React from 'react'
import './ShopCard.css'
import PropTypes from 'prop-types'

function ShopCard(props) {
  const card = props.card

  return (
    <div className="shopCard__card">
      <h2 className="shopCard__item shopCard__title">{card.name}</h2>
      <div className="shopCard__item shopCard__color">{card.color}</div>
      <img className="shopCard__item shopCard__img" src={card.img} alt={card.name}></img>
      <div className="shopCard__item shopCard__inner">
        <div className="shopCard__price">{card.price}</div>
        <button className="shopCard__btn">add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
}

export default ShopCard
