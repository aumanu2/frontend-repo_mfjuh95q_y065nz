import React from 'react';
import { Sparkles, BookOpen, Calendar, BrainCircuit } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Explain Clearly',
    text: 'Break down complex topics into simple, digestible explanations.'
  },
  {
    icon: BookOpen,
    title: 'Practice with Quizzes',
    text: 'Test yourself with AI-generated questions and instant feedback.'
  },
  {
    icon: Calendar,
    title: 'Plan Your Study',
    text: 'Generate smart schedules tailored to your topics and pace.'
  },
  {
    icon: BrainCircuit,
    title: 'Agentic Reasoning',
    text: 'Leverage multiple agents for creativity, reasoning, and execution.'
  }
];

export default function FeatureCards() {
  return (
    <section className="bg-[#0f1021] py-12">
      <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 hover:bg-white/10 transition">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#A78BFA] via-[#4ADE80] to-amber-300 mb-3 flex items-center justify-center">
              <Icon className="text-black" size={20} />
            </div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
