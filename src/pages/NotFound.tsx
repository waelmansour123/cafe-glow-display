// React Router hook to get current location
import { useLocation } from "react-router-dom";
// React hook for side effects
import { useEffect } from "react";

/**
 * NotFound Component
 * 
 * 404 error page displayed when users navigate to non-existent routes
 * Features:
 * - Error logging for debugging
 * - User-friendly error message
 * - Navigation back to homepage
 * - Clean, minimal design
 */
const NotFound = () => {
  // Get current location to log the attempted path
  const location = useLocation();

  /**
   * Effect: Log 404 errors for debugging
   * Helps developers track which URLs users are trying to access
   */
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Large 404 heading */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* User-friendly error message */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        
        {/* Link back to homepage */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
