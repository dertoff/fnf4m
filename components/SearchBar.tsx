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
                placeholder="Search for your favorite FNF MOD..."
                value={value}
                onChange={onChange}
                className="w-full bg-[#261447] rounded-full py-3 pr-4 pl-12 border border-[#6A1B9A] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] focus:border-[#00FFFF]"
                aria-label="Search FNF games"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchBar;