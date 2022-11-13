import React from 'react'
import PropertyItem from '../Components/PropertyItem'
import { cardDetails } from '../utils/mockDB'

const Rent = () => {
  return ( 
    <div>
      <div className="query-results">
        <div className="query-results--details">
          <div className="query-results--details--listings">
            <PropertyItem 
              {...cardDetails}/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Rent