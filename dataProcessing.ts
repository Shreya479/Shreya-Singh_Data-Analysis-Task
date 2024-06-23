import { CropData, AggregatedData, CropAverageData } from "../types"; 

// Function to process agriculture data and generate aggregated and average data
export function processAgricultureData(data: CropData[]): { aggregatedData: AggregatedData[], cropAverageData: CropAverageData[] } {
  const aggregatedData: AggregatedData[] = []; 
  const cropAverageData: CropAverageData[] = []; 

  // Get unique years from the data
  const years = Array.from(new Set(data.map(item => item.Year)));

  // Loop through each year
  years.forEach(year => {
    const cropsOfYear = data.filter(item => item.Year === year);

    // Filter valid crops (with non-empty production, yield, and area)
    const validCrops = cropsOfYear.filter(item =>
      item["Crop Production (UOM:t(Tonnes))"] !== "" &&
      item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] !== "" &&
      item["Area Under Cultivation (UOM:Ha(Hectares))"] !== ""
    );

    // Skip the year if no valid crops are found
    if (validCrops.length === 0) {
      return;
    }

    // Calculate max and min production crops for the year
    const maxProductionCrop = validCrops.reduce((prev, current) =>
      parseFloat(prev["Crop Production (UOM:t(Tonnes))"] as string) > parseFloat(current["Crop Production (UOM:t(Tonnes))"] as string) ? prev : current
    )["Crop Name"];

    const minProductionCrop = validCrops.reduce((prev, current) =>
      parseFloat(prev["Crop Production (UOM:t(Tonnes))"] as string) < parseFloat(current["Crop Production (UOM:t(Tonnes))"] as string) ? prev : current
    )["Crop Name"];

    // Add aggregated data for the year
    aggregatedData.push({ year, maxProductionCrop, minProductionCrop });

    // Calculate average yield and average area for the max production crop
    const averageYield = validCrops.reduce((total, item) => total + parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] as string), 0) / validCrops.length;
    const averageArea = validCrops.reduce((total, item) => total + parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"] as string), 0) / validCrops.length;

    // Add crop average data for the max production crop
    cropAverageData.push({ crop: maxProductionCrop, averageYield, averageArea });
  });

  return { aggregatedData, cropAverageData };
}
