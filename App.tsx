import React, { useEffect, useState } from 'react'; 
import MaxMinProductionTable from "./components/MaxMinProductionTable"; 
import CropAverageTable from "./components/CropAverageTable";
import { fetchAgricultureData } from "./data/dataFetching"; 
import { processAgricultureData } from "./utils/dataProcessing"; 
import { AggregatedData, CropAverageData } from "./types"; 
import './App.css'; 

// Functional component for the main App
const App: React.FC = () => {
  // State hooks for aggregated and crop average data
  const [aggregatedData, setAggregatedData] = useState<AggregatedData[]>([]);
  const [cropAverageData, setCropAverageData] = useState<CropAverageData[]>([]);

  // Effect hook to fetch and process data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAgricultureData(); 
        const { aggregatedData, cropAverageData } = processAgricultureData(data); 
        setAggregatedData(aggregatedData);
        setCropAverageData(cropAverageData);
      } catch (error) {
        console.error("Error fetching or processing data:", error); 
      }
    };

    fetchData(); 
  }, []); 
  // JSX structure for rendering the component
  return (
    <div className="app-container">
      <h1>Agriculture Data</h1>
      <div className="tables-container">
        <MaxMinProductionTable data={aggregatedData} /> 
        <CropAverageTable data={cropAverageData} /> 
      </div>
    </div>
  );
};

export default App; 
