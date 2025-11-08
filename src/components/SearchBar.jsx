import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSubmit, placeholder = 'Search', blurred = false }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit?.(value.trim());
    }
  };

  return (
    <div className={`w-full bg-white/10 border border-white/20 rounded-2xl p-1 backdrop-blur ${blurred ? 'ring-1 ring-white/10' : ''}`}>
      <div className="flex items-center gap-3 bg-[#0f1021]/60 rounded-xl px-3 py-2">
        <Search className="text-white/70" size={18} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`flex-1 bg-transparent outline-none text-white placeholder-white/40 ${value ? 'placeholder-transparent' : ''}`}
        />
        <button
          onClick={() => value.trim() && onSubmit?.(value.trim())}
          className="px-4 py-2 rounded-lg bg-[#4ADE80] text-black font-medium hover:brightness-110 transition"
        >
          Go
        </button>
      </div>
    </div>
  );
}
