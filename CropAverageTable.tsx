import React from 'react';
import { CropAverageData } from '../types'; 
import './CropAverageTable.css'; 

interface Props {
  data: CropAverageData[]; // Props interface defining the type of 'data' prop
}

const CropAverageTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="table-container">
      <h2>Crop Average Yield/Area</h2> 
      <table>
        <thead>
          <tr>
            <th>Crop</th> 
            <th>Average Yield (Kg/Ha)</th> 
            <th>Average Area (Ha)</th> 
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            // Mapping over data array to render rows
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.crop}</td> 
                <td>{item.averageYield.toFixed(2)}</td> 
                <td>{item.averageArea.toFixed(2)}</td> 
              </tr>
            ))
          ) : (
            // Displaying message when data is empty
            <tr>
              <td colSpan={3}>No data available</td> 
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CropAverageTable;
