import React from 'react'
import image2 from '../images/image2.jpg'

const Home = () => {
  return (
    <>
        <div className='container' style={{display:'flex', justifyContent:"flex-start"}}>
              <img src={image2} alt="" style={{zIndex:'1', width:'50%', height:'30em', marginTop:'30px'}}/>
    </div>

        </>
  )
}

export default Home
