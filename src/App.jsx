import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';

function App() {
  const [route, setRoute] = useState('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = (r) => setRoute(r);

  const handleSearch = (topic) => {
    // For now, just navigate to a mock route in this single-file demo UI
    alert(`Searching for topic: ${topic}`);
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b16] text-white">
      <Navbar
        onLogin={() => navigate('login')}
        onSignup={() => navigate('signup')}
        onProfile={() => navigate('profile')}
        isAuthenticated={isAuthenticated}
      />

      {route === 'landing' && (
        <>
          <Hero onSearch={handleSearch} />
          <FeatureCards />
        </>
      )}

      {route === 'login' && (
        <div className="max-w-md mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
              setRoute('landing');
            }}
            className="space-y-4"
          >
            <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none" placeholder="Email or Mobile" />
            <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none" placeholder="Password" type="password" />
            <button className="w-full px-4 py-3 rounded-xl bg-[#4ADE80] text-black font-medium hover:brightness-110 transition">Submit</button>
          </form>
        </div>
      )}

      {route === 'signup' && (
        <div className="max-w-md mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsAuthenticated(true);
              setRoute('landing');
            }}
            className="space-y-4"
          >
            <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none" placeholder="Email" />
            <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none" placeholder="Mobile Number" />
            <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none" placeholder="Password" type="password" />
            <button className="w-full px-4 py-3 rounded-xl bg-[#4ADE80] text-black font-medium hover:brightness-110 transition">Create Account</button>
          </form>
        </div>
      )}

      {route === 'profile' && (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold mb-6">Profile</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2">User Info</h3>
              <p className="text-white/70 text-sm">Email: user@example.com</p>
              <p className="text-white/70 text-sm">Mobile: +1 555 0100</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2">Stats</h3>
              <p className="text-white/70 text-sm">Questions Attempted: 0</p>
              <p className="text-white/70 text-sm">Correct: 0 • Incorrect: 0</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
