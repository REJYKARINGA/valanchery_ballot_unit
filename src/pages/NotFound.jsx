import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Rejy's page after a short delay
    const timer = setTimeout(() => {
      navigate('/rejy');
    }, 2000); // 2 seconds delay

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 shadow-2xl">
        <div className="text-6xl mb-6">🤔</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-200 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-gray-300 mb-8">
          Redirecting to Rejy's page...
        </p>
        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default NotFound;