import React from 'react';
import Spline from '@splinetool/react-spline';
import SearchBar from './SearchBar';

export default function Hero({ onSearch }) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#1E1E2E]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.25),transparent_60%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-24 sm:pt-28 md:pt-32">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Your AI Study Buddy
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Explain concepts, generate subtopics, and quiz yourself — all in one place.
          </p>
        </div>
        <div className="mt-8">
          <SearchBar onSubmit={onSearch} placeholder="Enter your Topic" blurred />
        </div>
      </div>
    </section>
  );
}
