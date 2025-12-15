import React from 'react'

export default function Portfolio({ sweetImage, homeImage, circus }) {
  return (
    <>
      <main className="min-vh-100 pt-5 mt-5">
        
        <div className="text-center mb-4">
          <h1 className="text-black fw-bold text-uppercase">
            portfolio component
          </h1>

          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="border-top border-3 w-25 border-black mx-2"></div>
            <i className="fa-solid fa-star fs-4 text-black"></i>
            <div className="border-top border-3 w-25 border-black mx-2"></div>
          </div>
        </div>

        <div className="container">
          <div className="row g-3">

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={circus} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={homeImage} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={sweetImage} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={sweetImage} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={circus} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4">
              <div className="card">
                <img src={sweetImage} className="card-img-top img-fluid" alt="" />
              </div>
            </div>

          </div>
        </div>

      </main>
    </>
  )
}
