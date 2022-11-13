import React from 'react'

const PropertyItem = ({img, isNew, type, location, price, bedCount, bathCount}) => {
    console.log(img)
  return (
    <div className='listing--card'>
        <div className="card-badge">{isNew ? "New" : type}</div>
        <img src={img} alt="House picture"/>
        <div className="card-stats">
            <div className="card-price-location">
                <span className='card-price'>{price}$</span>
                <span className="card-location">{location}</span>
            </div>
            <div className="card-features">
                <span><i className="fa-solid fa-bed"></i>{bedCount} Beds</span>
                <span>{bathCount} Baths</span>
            </div>
        </div>
    </div>
  )
}

export default PropertyItem