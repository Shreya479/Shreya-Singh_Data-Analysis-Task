import { CropData } from "../types"; 

// Asynchronous function to fetch agriculture data
export async function fetchAgricultureData(): Promise<CropData[]> {
  // Fetch data from JSON file
  const response = await fetch('/agroDataset.json');
  // Parse JSON data from response
  const data = await response.json();
  return data;
}
