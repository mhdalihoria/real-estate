import React from 'react'
import ExploreCard from './ExploreCard'
import house from "../images/house.jpg"

const ExploreCards = () => {
  return (
    <div className="explore-homes-card-container">
        <div className="card-patch-container">
        <div className="card-patch">
            <ExploreCard className="main-card" imgSrc={house} locationName="Baghdad"/>
            <div className="secondary-card-container">
                <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            </div>
        </div>
        <div className="card-patch">
            <ExploreCard className="main-card" imgSrc={house} locationName="Baghdad"/>
            <div className="secondary-card-container">
                <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            </div>
        </div>
        <div className="card-patch">
            <ExploreCard className="main-card" imgSrc={house} locationName="Baghdad"/>
            <div className="secondary-card-container">
                <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            </div>
        </div>
        <div className="card-patch">
            <ExploreCard className="main-card" imgSrc={house} locationName="Baghdad"/>
            <div className="secondary-card-container">
                <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            <ExploreCard className="secondary-card" imgSrc={house} locationName="Baghdad"/>
            </div>
        </div>
        </div>
    </div>
  )
}
/**
 *  top-right
 top-left
 bottom-left
 bottom-right
 */
export default ExploreCards