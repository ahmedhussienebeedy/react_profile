import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='cursor '>
    <div className="container p-3">
        <div className="row text-center text-white">
            <div className="col-md-4">
        <h3>Location</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
        <div className='p-2 fs-4'>
        <i className="fa-brands fa-facebook m-2 border border-1 border-white rounded-circle "></i>
        <i className="fa-brands fa-twitter m-2 border border-1 border-white rounded-circle"></i>
        <i className="fa-brands fa-linkedin-in m-2 border border-1 border-white rounded-circle"></i>
        <i className="fa-solid fa-globe mx-1 icon m-2  border border-1 border-white rounded-circle"></i>

        </div>
            </div>
            <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
            </div>
        </div>
    </div>
    </div>

    <div className='p-3 copyright'>
        <p className='text-center text-white'>Copyright © Your Website 2021</p>
    </div>
    
    </>
  )
}
