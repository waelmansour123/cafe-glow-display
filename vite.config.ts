// Vite configuration utilities
import { defineConfig } from "vite";
// React plugin with SWC compiler for faster builds
import react from "@vitejs/plugin-react-swc";
// Node.js path utilities for resolving file paths
import path from "path";
// Lovable component tagger for development
import { componentTagger } from "lovable-tagger";

/**
 * Vite Configuration
 * 
 * Configures the build tool and development server
 * https://vitejs.dev/config/
 */
export default defineConfig(({ mode }) => ({
  // Development server configuration
  server: {
    host: "::",    // Listen on all network interfaces (IPv6)
    port: 8080,    // Development server port
  },
  
  // Plugins for build process
  plugins: [
    react(),       // React support with SWC compiler
    // Component tagger only in development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // Remove falsy values (like undefined in production)
  
  // Module resolution settings
  resolve: {
    alias: {
      // "@" alias points to src directory for cleaner imports
      // Allows imports like "@/components/Button" instead of "../../components/Button"
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
