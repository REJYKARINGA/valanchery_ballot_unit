import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import RejyPage from './pages/RejyPage'
import BallotUnit from './pages/BallotUnit'
import VotingCard from './pages/VotingCard'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import SplashLoader from './components/SplashLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Hide loader after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashLoader isVisible={isLoading} />
      {!isLoading && (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rejy" element={<RejyPage />} />
          <Route path="/ballot" element={<BallotUnit />} />
          <Route path="/confirmation" element={<VotingCard />} />
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  )
}

export default App