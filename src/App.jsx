import { Routes, Route } from 'react-router-dom'
import RejyPage from './pages/RejyPage'
import BallotUnit from './pages/BallotUnit'
import VotingCard from './pages/VotingCard'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rejy" element={<RejyPage />} />
      <Route path="/ballot" element={<BallotUnit />} />
      <Route path="/voting" element={<VotingCard />} />
      {/* Catch-all route for 404 pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App