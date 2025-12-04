import React, { useState, useEffect } from 'react';

export default function BallotUnit() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [activeTab, setActiveTab] = useState('ward');
  const [pressedButton, setPressedButton] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleVote = (candidateNumber) => {
    // Play beep sound
    const beepSound = new Audio('https://winward-evm.web.app/assets/beepSound--rqVG62k.mp3');
    beepSound.play().catch(error => console.log("Audio play failed:", error));
    
    setPressedButton(candidateNumber);
    setTimeout(() => {
      setPressedButton(null);
    }, 300);

    setSelectedCandidate(candidateNumber);
    
    // Show success page
    setShowSuccess(true);
  };

  // Redirect to /voting after 3 seconds when showSuccess is true
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        window.location.href = '/voting';
      }, 3000); // 3 seconds delay
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  // If showSuccess is true, render the loader page
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-5 flex justify-center items-center">
        <div className="w-full max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <img src="/confirmed.gif" alt="Loading" className="w-32 h-32 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Processing...</h2>
          <p className="text-xl font-semibold text-blue-600 mb-1">Vote Successfully Completed</p>
          <p className="text-lg text-gray-600">നിങ്ങളുടെ വോട്ട് വിജയകരമായി പൂർത്തീകരിച്ചു</p>
          <p className="text-md text-gray-500 mt-4">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  const candidates = [
    { number: 1, name: 'അബൂബക്കൽ ആച്ചിക്കുളത്ത്', party: '', symbol: '☂️' },
    { number: 2, name: '', party: '', symbol: '' },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-5 flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <div className="flex gap-2.5 mb-5">
          <button
            onClick={() => setActiveTab('ward')}
            className={`flex-1 py-3 text-center rounded-full font-bold cursor-pointer transition-all ${activeTab === 'ward'
              ? 'bg-black text-white opacity-100 shadow-lg'
              : 'bg-black text-white opacity-40'
              }`}
          >
            Ward
          </button>
          <button
            disabled
            className="flex-1 py-3 text-center rounded-full font-bold cursor-not-allowed transition-all bg-pink-300 text-pink-900 opacity-40"
          >
            Block
          </button>
          <button
            disabled
            className="flex-1 py-3 text-center rounded-full font-bold cursor-not-allowed transition-all bg-blue-200 text-blue-800 opacity-40"
          >
            District
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-8 pb-5 border-b-2 border-gray-200">
            <div className="flex items-center gap-2.5 text-2xl font-bold text-black">
              <span>Ready</span>
              <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-2xl font-bold text-black">Ballot Unit 1</div>
          </div>

          <div>
            {candidates.map((candidate) => (
              <div
                key={candidate.number}
                className="flex items-center py-4 px-2.5 border-b-2 border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 text-xl font-bold text-gray-500">
                  {candidate.number}
                </div>
                <div className="flex-1 flex items-center gap-4 text-xl font-semibold text-black">
                  {(candidate.name || candidate.symbol) && (
                    <>
                      {candidate.name && (
                        <span>{candidate.name}</span>
                      )}
                      {candidate.symbol && (
                        <span className="text-3xl">{candidate.symbol}</span>
                      )}
                    </>
                  )}
                </div>
                <div className="flex gap-4 items-center">
                  {/* Red Light - Non-clickable indicator */}
                  <div
                    className={`w-9 h-9 rounded-full border-none transition-all relative flex items-center justify-center ${
                      selectedCandidate === candidate.number 
                        ? 'bg-red-500' 
                        : 'bg-red-900'
                    }`}
                    style={{
                      boxShadow: selectedCandidate === candidate.number
                        ? '0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.4)'
                        : '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                    aria-label="Vote indicator light"
                  >
                  </div>
                  
                  {/* Blue Button - Only clickable if candidate has name */}
                  <button
                    onClick={candidate.name ? () => handleVote(candidate.number) : undefined}
                    disabled={!candidate.name}
                    className={`w-24 h-10 rounded-lg border-none transition-all relative overflow-hidden flex items-center justify-center ${
                      candidate.name ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    } ${
                      selectedCandidate === candidate.number 
                        ? 'animate-blue-to-green shadow-lg' 
                        : ''
                    } ${
                      pressedButton === candidate.number ? 'transform translate-y-0.5' : ''
                    }`}
                    style={{
                      background: selectedCandidate === candidate.number
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                      boxShadow: selectedCandidate === candidate.number
                        ? '0 0 30px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.3), 0 0 60px rgba(16, 185, 129, 0.4)'
                        : 'inset 0 3px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                    aria-label={`Vote for ${candidate.name || `Candidate ${candidate.number}`}`}
                  >
                    {selectedCandidate === candidate.number && (
                      <span className="text-white text-2xl font-extrabold animate-checkmark-pop">
                        ✓
                      </span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}