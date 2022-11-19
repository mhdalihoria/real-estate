import React from 'react'
import ViewHome from './ViewHome'

const ExploreCard = ({className, imgSrc, locationName}) => {
    // const styles = {
    //     backgroundImage: `url(${imgSrc})`
    // }

  return (
    <div className={className} >
        <h1>{locationName}</h1>
        <img src={imgSrc} alt={`Image of ${locationName}`} />
        <ViewHome />
    </div>
  )
}

export default ExploreCard