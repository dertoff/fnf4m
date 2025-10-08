
import React from 'react';
import { SearchIcon } from './Icons.tsx';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative">
            <input 
                type="text"
                placeholder="Search for your favorite game mod..."
                value={value}
                onChange={onChange}
                className="w-full bg-[#161b22] rounded-full py-3 pr-4 pl-12 border border-[#9370DB] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-[#39FF14]"
                aria-label="Search game mods"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchBar;