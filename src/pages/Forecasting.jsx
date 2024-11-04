import React from 'react'

const Forecasting = () => {
  return (
    <div className="home">
    <div className="main_heading">
        Product Forecasting
    </div>
    <div className="heading">

      <h1>Upload Your CSV file for product ForeCasting. </h1>
      <div className="btn_container">

      <div className="custom_input">
        <input type="file" />
        <button>
          <span>
            <i className="bi bi-upload"></i>
          </span>
          <span>Upload</span>{" "}
        </button>
      </div>
      <button className="process_btn"><i className="bi bi-text-right"></i> Process</button>
      </div>

    </div>
      <div className="orange"></div>
      <div className="blue"></div>
      <div className="red"></div>
      <div className="green"></div>
      
      {/* <PredictionCharts data={ data } /> */}

    </div>

  )
}

export default Forecasting