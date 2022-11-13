import React from 'react'
import PropertyItem from '../Components/PropertyItem'

const Rent = () => {
  return (
    <div>
      <div className="query-results">
        <div className="query-results--details">
          <div className="query-results--details--listings">
            <PropertyItem 
              details = {{
                img: 'https://cdn.discordapp.com/attachments/885177595803603014/1041251376493244416/todd-kent-178j8tJrNlc-unsplash.jpg',
                isNew: false,
                type: "Rent",
                location: "New Baghdad, Iraq",
                price: 3000,
                bedCount: 2,
                bathCount: 2
                }}/>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Rent