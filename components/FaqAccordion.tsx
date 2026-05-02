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
      className={`group border rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isOpen 
          ? 'bg-white border-indigo-200 shadow-xl shadow-indigo-100/40 ring-1 ring-indigo-50 my-4' 
          : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md my-3'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex justify-between items-start md:items-center focus:outline-none cursor-pointer select-none bg-transparent relative z-10"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold leading-snug transition-colors duration-300 pr-8 ${
          isOpen ? 'text-indigo-700' : 'text-slate-800 group-hover:text-indigo-600'
        }`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
           isOpen 
             ? 'bg-indigo-600 border-indigo-600 text-white rotate-180 shadow-md transform scale-110' 
             : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200'
        }`}>
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      
      <div 
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <div 
              className={`pt-4 border-t border-slate-100/80 text-slate-600 leading-relaxed text-base transition-all duration-700 ease-out transform ${
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