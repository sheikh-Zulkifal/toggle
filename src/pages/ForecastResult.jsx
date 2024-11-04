import React, { useState } from 'react'
import PredictionCharts from '../components/PredictionCharts';
import PredictionTables from '../components/PredictionTables';

const ForecastResult = () => {
    const [show, setShow] = useState("table");
    const data=[
        {
            "_id": "654f03c6592053ddee7c0715",
            "itemName": "Kue_Kering",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 7.14,
                    "_id": "654f03c6592053ddee7c0716"
                },
                {
                    "period": 2,
                    "quantity": 9.07,
                    "_id": "654f03c6592053ddee7c0717"
                },
                {
                    "period": 3,
                    "quantity": 11,
                    "_id": "654f03c6592053ddee7c0718"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        {
            "_id": "654f03c6592053ddee7c0719",
            "itemName": "Bollen_pisang",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 41.65,
                    "_id": "654f03c6592053ddee7c071a"
                },
                {
                    "period": 2,
                    "quantity": 42.54,
                    "_id": "654f03c6592053ddee7c071b"
                },
                {
                    "period": 3,
                    "quantity": 43.43,
                    "_id": "654f03c6592053ddee7c071c"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        {
            "_id": "654f03c6592053ddee7c071d",
            "itemName": "Kroisan",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 13.440000000000001,
                    "_id": "654f03c6592053ddee7c071e"
                },
                {
                    "period": 2,
                    "quantity": 14.65,
                    "_id": "654f03c6592053ddee7c071f"
                },
                {
                    "period": 3,
                    "quantity": 15.86,
                    "_id": "654f03c6592053ddee7c0720"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        {
            "_id": "654f03c6592053ddee7c0721",
            "itemName": "Roti_Tawar",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 11.57,
                    "_id": "654f03c6592053ddee7c0722"
                },
                {
                    "period": 2,
                    "quantity": 13.64,
                    "_id": "654f03c6592053ddee7c0723"
                },
                {
                    "period": 3,
                    "quantity": 15.709999999999999,
                    "_id": "654f03c6592053ddee7c0724"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        {
            "_id": "654f03c6592053ddee7c0725",
            "itemName": "Maffin",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 31.93,
                    "_id": "654f03c6592053ddee7c0726"
                },
                {
                    "period": 2,
                    "quantity": 35.82,
                    "_id": "654f03c6592053ddee7c0727"
                },
                {
                    "period": 3,
                    "quantity": 39.71,
                    "_id": "654f03c6592053ddee7c0728"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        {
            "_id": "654f03c6592053ddee7c0729",
            "itemName": "Brownies",
            "predictions": [
                {
                    "period": 1,
                    "quantity": 18.37,
                    "_id": "654f03c6592053ddee7c072a"
                },
                {
                    "period": 2,
                    "quantity": 19.33,
                    "_id": "654f03c6592053ddee7c072b"
                },
                {
                    "period": 3,
                    "quantity": 20.29,
                    "_id": "654f03c6592053ddee7c072c"
                }
            ],
            "processID": 1699677067141,
            "__v": 0
        },
        
    ]
  return (
    <div>
<div className="forecasting_output_container">
<div className="result_btn_container">

<button onClick={()=>setShow("chart")} className={show=="chart"?"selected_btn":""}>Chart </button>
<button onClick={()=>setShow("table")} className={show=="table"?"selected_btn":""} > Table</button>
</div>
    {
        show === "chart" ? (
            <PredictionCharts data={data} />
        ):(
            <PredictionTables data={data}/>
        )
    }
</div>

    </div>
  )
}

export default ForecastResult