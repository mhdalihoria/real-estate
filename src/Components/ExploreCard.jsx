import React from 'react'
import ViewHome from './ViewHome'

const ExploreCard = ({className, imgSrc, locationName}) => {

  return (
    <div className={className} >
        <h1>{locationName}</h1>
        <img src={imgSrc} alt={`Image of ${locationName}`} />
        <ViewHome />
    </div>
  )
}

export default ExploreCard