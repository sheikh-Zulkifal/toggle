import "./components.css"
const PredictionTables = ({data}) => {
  return (
    <table className='predictionTable' >
    <thead>
      <tr>
        <th>Item Name</th>
        <th >Period 1 </th>
        <th>Period 2 </th>
        <th>Period 3 </th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          <td>{item.itemName}</td>
          {item.predictions.map((prediction, index) => (
            <td key={index}>{prediction.quantity.toFixed(0)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default PredictionTables