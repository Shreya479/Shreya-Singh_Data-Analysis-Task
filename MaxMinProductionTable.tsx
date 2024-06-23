import React from 'react';
import { AggregatedData } from '../types';
import './MaxMinProductionTable.css';

interface Props {
  data: AggregatedData[]; 
}

const MaxMinProductionTable: React.FC<Props> = ({ data }) => {
  return (
    <div className="table-container"> 
      <h2>Max/Min Production Crops</h2> 
      <table> 
        <thead>
          <tr>
            <th>Year</th> 
            <th>Max Production Crop</th> 
            <th>Min Production Crop</th> 
          </tr>
        </thead>
        <tbody>
         
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td> 
                <td>{item.maxProductionCrop}</td> 
                <td>{item.minProductionCrop}</td> 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No data available</td> 
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MaxMinProductionTable;
