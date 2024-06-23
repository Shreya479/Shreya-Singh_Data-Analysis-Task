import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import { MantineProvider } from '@mantine/core'; 
import App from './App'; 

// Create a root node for rendering React app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the app inside MantineProvider for styling
root.render(
  <React.StrictMode> 
    <MantineProvider> 
      <App /> 
    </MantineProvider>
  </React.StrictMode>
);
