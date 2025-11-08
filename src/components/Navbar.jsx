import React from 'react';
import { User, LogIn, UserPlus } from 'lucide-react';

export default function Navbar({ onLogin, onSignup, onProfile, isAuthenticated }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-[#1E1E2E]/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#A78BFA] via-[#4ADE80] to-amber-300 shadow-md" />
          <span className="font-semibold tracking-wide text-white text-lg">AI Study Buddy</span>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <button
              onClick={onProfile}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
            >
              <User size={18} />
              <span>My Profile</span>
            </button>
          ) : (
            <>
              <button
                onClick={onLogin}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white hover:bg-white/10 transition"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
              <button
                onClick={onSignup}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4ADE80] text-black font-medium hover:brightness-110 transition"
              >
                <UserPlus size={18} />
                <span>Sign Up</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
