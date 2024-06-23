// Interface for individual crop data
export interface CropData {
  Country: string;
  Year: string; 
  "Crop Name": string; 
  "Crop Production (UOM:t(Tonnes))": number | string; 
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | string; 
  "Area Under Cultivation (UOM:Ha(Hectares))": number | string; 
}

// Interface for aggregated data
export interface AggregatedData {
  year: string;
  maxProductionCrop: string; 
  minProductionCrop: string; 
}

// Interface for crop average data
export interface CropAverageData {
  crop: string; 
  averageYield: number; 
  averageArea: number; 
}
