// React 18 new createRoot API for rendering the application
import { createRoot } from 'react-dom/client'
// Main App component that contains all routes and providers
import App from './App.tsx'
// Global CSS styles including Tailwind CSS
import './index.css'

// Create the root element and render the App component
// This replaces the old ReactDOM.render() method in React 18
createRoot(document.getElementById("root")!).render(<App />);
