import React from 'react'

export default function Contacts() {
  return (
    <>
      
     <div className="container">
      <div className="row">
        <div className="col-md-12">
        <div className="text-center mb-4">
          <h1 className="text-black fw-bold text-uppercase mt-5">
            content section
          </h1>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="border-top border-3 w-25 border-black mx-2"></div>
            <i className="fa-solid fa-star fs-4 text-black"></i>
            <div className="border-top border-3 w-25 border-black mx-2"></div>
          </div>
        </div>
        </div>
        <div className="row justify-content-center mt-4">
  <div className="col-12 col-md-6">

    <div className="form-floating mb-4  ">
      <input
        type="email"
        className="form-control border-0 border-bottom rounded-0 shadow-none"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>

    <div className="form-floating mb-4">
      <input
        type="password"
        className="form-control border-0 border-bottom rounded-0 shadow-none"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-floating mb-4">
      <input
        type="password"
        className="form-control mb-4 border-0 border-bottom rounded-0 shadow-none"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-floating mb-4 border-0 border-bottom rounded-0 shadow-none">
      <input
        type="password"
        className="form-control border-0 border-bottom rounded-0 shadow-none"
        id="floatingPassword"
        placeholder="Password"
      />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className='btn btn-outline-success mb-5'>Send Message</button>
    

  </div>
</div>

      </div>
     </div>

      
    </>
  )
}
