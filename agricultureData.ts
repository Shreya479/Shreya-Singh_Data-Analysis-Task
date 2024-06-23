// Define interface for crop data
export interface CropData {
  year: number;
  crop: string;
  production: number;
  area: number;
  yield: number;
}

export const agricultureData: CropData[] = [
  { year: 1950, crop: "Wheat", production: 50, area: 30, yield: 1.67 },
  { year: 1950, crop: "Rice", production: 70, area: 50, yield: 1.4 },
  { year: 1950, crop: "Corn", production: 30, area: 20, yield: 1.5 },
  { year: 1951, crop: "Wheat", production: 60, area: 35, yield: 1.71 },
  { year: 1951, crop: "Rice", production: 65, area: 45, yield: 1.44 },
  { year: 1951, crop: "Corn", production: 40, area: 25, yield: 1.6 },
];
