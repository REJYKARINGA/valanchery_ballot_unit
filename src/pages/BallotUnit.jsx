import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function BallotUnit() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [activeTab, setActiveTab] = useState('ward');
  const [pressedButton, setPressedButton] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  const handleVote = (candidateNumber) => {
    // Set button pressed state
    setPressedButton(candidateNumber);
    setTimeout(() => {
      setPressedButton(null);
    }, 300);

    // Set candidate and start blinking
    setSelectedCandidate(candidateNumber);
    setIsBlinking(true);
    
    // Play beep sound continuously during blinking
    const beepSound = new Audio('/beepsound.mp3');
    const playBeep = () => {
      beepSound.currentTime = 0;
      beepSound.play().catch(error => console.log("Audio play failed:", error));
    };
    
    // Play beep every 500ms (matching blink rate)
    playBeep();
    const beepInterval = setInterval(playBeep, 500);
    
    // Stop blinking and beeping after 3 seconds, then show success
    setTimeout(() => {
      clearInterval(beepInterval);
      setIsBlinking(false);
      setShowSuccess(true);
    }, 1000);
  };

  // Redirect to /voting after 3 seconds when showSuccess is true
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        window.location.href = '/confirmation';
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  // If showSuccess is true, render the loader page
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-4 sm:p-5 flex justify-center items-center">
        <div className="w-full max-w-3xl text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white text-4xl sm:text-6xl">✓</span>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Processing...</h2>
          <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-1">Vote Successfully Completed</p>
          <p className="text-base sm:text-lg text-gray-600">നിങ്ങളുടെ വോട്ട് വിജയകരമായി പൂർത്തീകരിച്ചു</p>
          <p className="text-sm sm:text-md text-gray-500 mt-4">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  const candidates = [
    { number: 1, name: '', party: '', symbol: '' },
    { number: 2, name: 'U മുജീബ് റഹ്മാൻ', party: '', symbol: '/umbrella.png' },
    { number: 3, name: '', party: '', symbol: '' },
    { number: 4, name: '', party: '', symbol: '' },
    { number: 5, name: '', party: '', symbol: '' },
    { number: 6, name: '', party: '', symbol: '' },
    { number: 7, name: '', party: '', symbol: '' },
    { number: 8, name: '', party: '', symbol: '' },
    { number: 9, name: '', party: '', symbol: '' },
    { number: 10, name: '', party: '', symbol: '' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gradient-to-br from-gray-100 to-white p-3 sm:p-5 flex justify-center items-center">
        <div className="w-full max-w-3xl">
          <div className="flex gap-1.5 sm:gap-2.5 mb-3 sm:mb-5">
            <button
              onClick={() => setActiveTab('ward')}
              className={`flex-1 py-2 sm:py-3 text-center rounded-full text-sm sm:text-base font-bold cursor-pointer transition-all ${activeTab === 'ward'
                ? 'bg-black text-white opacity-100 shadow-lg'
                : 'bg-black text-white opacity-40'
                }`}
            >
              Ward
            </button>
            <button
              disabled
              className="flex-1 py-2 sm:py-3 text-center rounded-full text-sm sm:text-base font-bold cursor-not-allowed transition-all bg-pink-300 text-pink-900 opacity-40"
            >
              Block
            </button>
            <button
              disabled
              className="flex-1 py-2 sm:py-3 text-center rounded-full text-sm sm:text-base font-bold cursor-not-allowed transition-all bg-blue-200 text-blue-800 opacity-40"
            >
              District
            </button>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-4 sm:mb-8 pb-3 sm:pb-5 border-b-2 border-gray-200">
              <div className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-2xl font-bold text-black">
                <span>Ready</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-lg sm:text-2xl font-bold text-black">Ballot Unit 1</div>
            </div>
            

            <div>
              {candidates.map((candidate) => (
                <div
                  key={candidate.number}
                  className="flex items-center py-3 sm:py-4 px-1 sm:px-2.5 border-b-2 border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 sm:w-12 text-base sm:text-xl font-bold text-gray-500">
                    {candidate.number}
                  </div>
                  <div className="flex-1 flex items-center gap-2 sm:gap-4 text-sm sm:text-xl font-semibold text-black overflow-hidden">
                    {(candidate.name || candidate.symbol) && (
                      <>
                        {candidate.name && (
                          <span className="line-clamp-2">{candidate.name}</span>
                        )}
                        {candidate.symbol && (
                          candidate.symbol.startsWith('/') ? (
                            <img 
                              src={candidate.symbol} 
                              alt="Candidate symbol" 
                              className="w-6 h-6 sm:w-8 sm:h-8 object-cover"
                            />
                          ) : (
                            <span className="text-xl sm:text-3xl flex-shrink-0">{candidate.symbol}</span>
                          )
                        )}
                      </>
                    )}
                  </div>
                  <div className="flex gap-2 sm:gap-4 items-center flex-shrink-0">
                    {/* Red Light - Blinks when selected */}
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full border-none transition-all relative flex items-center justify-center ${
                        selectedCandidate === candidate.number && isBlinking
                          ? 'bg-red-500 animate-pulse' 
                          : selectedCandidate === candidate.number
                          ? 'bg-red-500'
                          : 'bg-red-900'
                      }`}
                      style={{
                        boxShadow: selectedCandidate === candidate.number && isBlinking
                          ? '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.4)'
                          : selectedCandidate === candidate.number
                          ? '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.4)'
                          : '0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                      aria-label="Vote indicator light"
                    >
                    </div>
                    
                    {/* Blue Button */}
                    <button
                      onClick={candidate.name ? () => handleVote(candidate.number) : undefined}
                      disabled={!candidate.name || isBlinking}
                      className={`w-16 h-8 sm:w-24 sm:h-10 rounded-lg border-none transition-all relative overflow-hidden flex items-center justify-center ${
                        candidate.name && !isBlinking ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                      } ${
                        selectedCandidate === candidate.number && !isBlinking
                          ? 'animate-blue-to-green shadow-lg' 
                          : ''
                      } ${
                        pressedButton === candidate.number ? 'transform translate-y-0.5' : ''
                      }`}
                      style={{
                        background: selectedCandidate === candidate.number && !isBlinking
                          ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                          : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                        boxShadow: selectedCandidate === candidate.number && !isBlinking
                          ? '0 0 30px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 0 60px rgba(16, 185, 129, 0.4)'
                          : 'inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                      aria-label={`Vote for ${candidate.name || `Candidate ${candidate.number}`}`}
                    >
                      {selectedCandidate === candidate.number && !isBlinking && (
                        <span className="text-white text-xl sm:text-2xl font-extrabold animate-checkmark-pop">
                          ✓
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Demo Disclaimer - Moved to Bottom */}
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-3 sm:p-4 mt-4 sm:mt-6 rounded">
                <div className="flex">
                  <div className="ml-2 sm:ml-3">
                    <p className="text-xs sm:text-sm text-yellow-700">
                      <strong>Demo Only:</strong> This is a demonstration electronic voting machine. No actual votes are recorded. This system is for demonstration purposes only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      <style jsx>{`
        @keyframes checkmark-pop {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-checkmark-pop {
          animation: checkmark-pop 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}