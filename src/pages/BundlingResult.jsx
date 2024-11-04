import { useState } from "react";
import "./pages.css";
const BundlingResult = () => {
    const [dataBundle, setDataBundle] = useState([
        { lhs: ["Maffin"], rhs: ["Arem_arem"], confidence: 0.6284153005464481 },
        { lhs: ["Arem_arem"], rhs: ["Donat"], confidence: 0.6175277251825805 },
        { lhs: ["Donat"], rhs: ["Arem_arem"], confidence: 0.7229259024699177 },
      ]);
    
  return (
    <>

    {dataBundle.length > 0 && (
        <div className="dataBundle_output_container">
          <h2>Bundling Recommendations</h2>
          <table>
            <thead>
              <tr>
                <th>Bundle</th>
                <th>Item 1</th>
                <th>Item 2</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              {dataBundle.map((item, index) => (
                <tr key={index}>
                  <td>Bundle {index + 1}</td>
                  <td>
                    <ul>
                      {item.lhs.map((lhsItem, idx) => (
                        <span key={idx}>{lhsItem}</span>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {item.rhs.map((rhsItem, idx) => (
                        <span key={idx}>{rhsItem}</span>
                      ))}
                    </ul>
                  </td>
                  <td>{item.confidence.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      }
    </>
  )
}

export default BundlingResult