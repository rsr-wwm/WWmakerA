import React from 'react';

interface FaqAccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div 
      className={`group border rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isOpen 
          ? 'bg-white border-brand-200 shadow-2xl shadow-brand-100/50 my-6' 
          : 'bg-white border-slate-200 hover:border-brand-300 hover:shadow-lg my-4 scale-[0.98] hover:scale-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-8 py-6 flex justify-between items-start md:items-center focus:outline-none cursor-pointer select-none bg-transparent relative z-10"
        aria-expanded={isOpen}
      >
        <span className={`text-xl font-black leading-tight transition-colors duration-300 pr-10 tracking-tight ${
          isOpen ? 'text-brand-600' : 'text-slate-900 group-hover:text-brand-600'
        }`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
           isOpen 
             ? 'bg-brand-600 border-brand-600 text-white rotate-180 shadow-2xl shadow-brand-500/30' 
             : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200'
        }`}>
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-8 pt-0">
            <div 
              className={`pt-6 border-t border-slate-100 text-slate-500 font-medium leading-relaxed text-base transition-all duration-700 ease-out transform ${
                  isOpen ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 -translate-y-2'
              }`}
            >
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};