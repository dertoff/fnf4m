
import React from 'react';
import { ListIcon, CommunityIcon } from './Icons.tsx';

interface HeaderProps {
    onToggleNav: () => void;
    onToggleCommunity: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleNav, onToggleCommunity }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#161b22] shadow-lg">
            <button 
                onClick={onToggleNav} 
                className="text-white text-3xl transition-colors duration-300 hover:text-[#39FF14]"
                aria-label="Navigation Menu"
            >
                <ListIcon />
            </button>
            <div className="h-10 sm:h-12">
                <img 
                    src="https://i.ibb.co/9vRw3Sg/logo.png" 
                    alt="MOD Games Showcase Logo" 
                    className="h-full object-contain"
                />
            </div>
            <button 
                onClick={onToggleCommunity} 
                className="text-white text-3xl transition-colors duration-300 hover:text-[#39FF14]"
                aria-label="Community"
            >
                <CommunityIcon />
            </button>
        </header>
    );
};

export default Header;