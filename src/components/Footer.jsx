import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b16] text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} AI Study Buddy. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a className="hover:text-white" href="#">Privacy</a>
          <a className="hover:text-white" href="#">Terms</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
