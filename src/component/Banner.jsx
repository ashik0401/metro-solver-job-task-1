import React from 'react';

const Banner = () => {
    return (
        <div className="w-full relative flex flex-col justify-center items-center text-center">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url('/Materiel/Comp 1_4.gif')` }}
            >
                <div className="absolute inset-0 bg-black/40 md:bg-black/50"></div>
            </div>

            <div className="relative z-10 px-4 py-16 sm:py-20 md:py-32 lg:py-40 max-w-6xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                    Expert to <br />Digitalise Your <br /> <span className='text-purple-500'>Growth</span>
                </h2>
                <p className="mb-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
                    We are constantly growing, learning, and improving. Enter your personal real estate sanctuary, where finding the ideal home is easier than ever.
                </p>
                <button className="px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white transition-all text-sm sm:text-base md:text-lg"
                    style={{ background: "linear-gradient(181.5deg, #6331F1 0.44%, #6331F1 55.78%, #6D43E4 72.02%, #9F63FF 104.85%)" }}
                >
                    Explore Now
                </button>

            </div>
        </div>
    );
};

export default Banner;
