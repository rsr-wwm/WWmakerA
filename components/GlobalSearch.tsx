
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { searchContent, SearchResult } from '../services/contentService';

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const hits = searchContent(query);
        setResults(hits);
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-24 px-4 bg-slate-900/60 backdrop-blur-sm transition-all" onClick={onClose}>
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] border border-slate-200" onClick={e => e.stopPropagation()}>
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Search services, products, or insights..." 
                        className="flex-grow text-lg outline-none text-slate-900 placeholder-slate-400 h-10"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-slate-100 rounded-lg px-2 py-1 text-xs font-bold uppercase">ESC</button>
                </div>
                
                <div className="overflow-y-auto bg-slate-50 flex-grow p-2">
                    {query.length > 0 && results.length === 0 && (
                        <div className="p-8 text-center text-slate-500">
                            No results found for "{query}".
                        </div>
                    )}
                    
                    {query.length === 0 && (
                        <div className="p-8 text-center text-slate-400 text-sm">
                            Type to start searching...
                        </div>
                    )}

                    <div className="space-y-1">
                        {results.map((result, idx) => (
                            <NavLink 
                                key={idx} 
                                to={result.link} 
                                onClick={() => { setQuery(''); onClose(); }}
                                className="block bg-white p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600">{result.title}</h4>
                                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{result.type}</span>
                                </div>
                                <p className="text-xs text-slate-500 line-clamp-1">{result.snippet}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
                
                {results.length > 0 && (
                    <div className="p-2 bg-slate-100 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
                        Found {results.length} matches
                    </div>
                )}
            </div>
        </div>
    );
};
