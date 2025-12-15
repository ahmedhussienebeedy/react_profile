import React from 'react'




export default function Home({myImage}) {
  
  return (
    <>
        <main className='text-custom vh-100 '>
<div className='d-flex flex-column justify-content-center align-items-center '>
<img src={myImage} className='w-25 mb-3 mt-5' alt="photo" />
      <h2 className='text-white fw-bold text-capitalize'>Start Framework</h2>
   
</div>
<div className='d-flex align-items-center justify-content-center mt-4'>
  <div className="border-top border-3 w-25 border-white flex-grow-1 mx-3"></div>
  <i className="fa-solid fa-star fs-3 text-white"></i>
  <div className="border-top border-3  w-25 border-white flex-grow-1 mx-3"></div>
</div>


  <p className='text-center mt-3 fs-5 text-white'>Graphic Artist - Web Designer - Illustrator
  </p>
     </main>
   
    </>
  )
}
