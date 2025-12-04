import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow bg-gradient-to-r from-purple-500 via-purple-600 to-blue-700 flex justify-center items-center p-5 md:p-10 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/5 left-1/5 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="max-w-6xl w-full text-center relative z-10 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 text-shadow-lg">
                        Electronic Voting Machine
                    </h1>
                    <p className="text-xl md:text-2xl text-white opacity-95 mb-12 font-semibold text-shadow">
                        ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീൻ
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                        <Link 
                            to="/ballot" 
                            className="bg-white rounded-3xl p-6 md:p-8 text-decoration-none transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-blue-500 relative overflow-hidden"
                        >
                            <div className="text-5xl mb-4 filter drop-shadow-md">
                                🗳️
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-800 mb-3">
                                Standard Ballot Unit
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                                Classic EVM ballot unit interface
                            </p>
                        </Link>

                        <Link 
                            to="/rejy" 
                            className="bg-white rounded-3xl p-6 md:p-8 text-decoration-none transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-t-4 border-green-500 relative overflow-hidden"
                        >
                            <div className="text-5xl mb-4 filter drop-shadow-md">
                                👤
                            </div>
                            <h2 className="text-2xl font-extrabold text-gray-800 mb-3">
                                Rejy's Page
                            </h2>
                            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                                Custom page
                            </p>
                        </Link>
                    </div>

                    <div className="mt-10 pt-8 border-t-2 border-white border-opacity-20 animate-fade-in">
                        <p className="text-white text-lg font-semibold uppercase tracking-widest">
                            Demo Electronic Voting Machine - For Demonstration Purposes Only
                        </p>
                        <p className="text-yellow-300 text-sm mt-2 font-medium">
                            This is a demonstration application only and not a real voting system. No actual votes are recorded.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}