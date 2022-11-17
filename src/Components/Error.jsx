import React from 'react'

function Error() {
  return (
    <div className='error-container'>
      <h1 className="error-code strong-text">404 - Not Found</h1>
      <h3 className="error-desc regular-text">
        The content you are looking for has been removed or unavailable. 
      </h3>
      <h4 className="error-request thin-text">
      Please check your info and try again later.
      </h4>
    </div>
  )
}

export default Error