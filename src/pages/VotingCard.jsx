import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function VotingCard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    // Show modal after 5 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleVoteAgain = () => {
    navigate('/ballot');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleWhatsAppClick = () => {
    // Open WhatsApp chat with the provided number
    window.open('https://wa.me/917994870262', '_blank');
    closeModal();
  };

  const handleCallClick = () => {
    // Initiate phone call
    window.location.href = 'tel:+917994870262';
    closeModal();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Load Keraleeyam Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Keraleeyam&display=swap');
        `}
      </style>
      
      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 relative overflow-hidden">
            {/* Decorative header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center">
              <h3 className="text-xl font-bold text-white">Create Your Member Demo EVM</h3>
            </div>
            
            <button 
              onClick={closeModal}
              className="absolute top-3 right-3 text-white hover:text-gray-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-center">
                Contact us for your personalized EVM demo experience
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
                
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>Contact: +91 7994870262</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex-grow bg-gradient-to-b from-white via-gray-300 to-gray-500 flex items-center justify-center p-4">
        <div className="max-w-md w-full relative">
          {/* Background Decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img 
              src="/decoration_blur.png" 
              alt="Decoration" 
              className="absolute bottom-20 left-4 w-24 h-24 opacity-30"
            />
            <img 
              src="/decoration.png" 
              alt="Decoration" 
              className="absolute bottom-20 right-4 w-20 h-20 opacity-40"
            />
          </div>
          
          {/* Header Text */}
          <div className="text-center mb-6">
            <h1 className="text-lg md:text-xl font-bold text-blue-900 mb-1 tracking-wide" style={{ fontFamily: 'Keraleeyam, serif' }}>
              സോഷ്യൽ മീഡിയിൽ ഒന്നാമത്,
            </h1>
            <h2 className="text-base md:text-lg font-bold font-semibold text-red-600 tracking-wide" style={{ fontFamily: 'Keraleeyam, serif' }}>
              ജനമനസ്സുകളിൽ ഒന്നാമത്
            </h2>
          </div>

          {/* Card Container */}
          <div className="relative">
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Voted Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg">
                  <span className="font-semibold">Voted</span>
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>

              {/* Candidate Image */}
              <div>
              <div className="">
                <img
                  src="/mujeeb_2.jpg"
                  alt="Candidate"
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Candidate Info */}
              <div className="p-6 relative z-10">
                {/* Election Symbol */}
                <div className="absolute -top-8 right-6 bg-white rounded-full p-3 shadow-lg z-10">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src="/umbrella.png" 
                      alt="Election Symbol" 
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                <h5 className="text-2xl font-bold text-gray-900 mb-1">
                  U മുജീബ് 
                </h5>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  റഹ്മാൻ
                </h4>
                <p className="text-white text-sm font-medium">Valanchery Municipality</p>
                <p className="text-white text-sm font-medium">Ward: 20</p>
              </div>
              
              {/* Golden Ribbon */}
              <div className="absolute bottom-12 left-0 right-0 h-24 pointer-events-none z-0">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 opacity-80 transform -skew-y-2"></div>
                </div>
              </div>
              </div>
            
            </div>

            {/* Vote Again Button */}
            <div className="mt-6 text-center">
              <button 
                onClick={handleVoteAgain}
                className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Vote Again
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}