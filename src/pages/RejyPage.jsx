import React from 'react';
import Footer from '../components/Footer';

const RejyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-5 text-center">
        <h1 className="text-2xl font-bold">Welcome rejy</h1>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6 rounded max-w-2xl mx-auto">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Only:</strong> This is a demonstration page. No actual votes are recorded. This system is for demonstration purposes only.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RejyPage;