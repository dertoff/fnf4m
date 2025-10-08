
import React from 'react';
import type { Game } from '../types.ts';
import { AppleIcon, AndroidIcon, DownloadCloudIcon, WindowsIcon, XboxIcon } from './Icons.tsx';

interface GameCardProps {
    game: Game;
    onSelect: () => void;
}

const PlatformIcons: React.FC<{ platforms: Game['platforms'] }> = ({ platforms }) => {
    const iconMap = {
        android: <AndroidIcon />,
        apple: <AppleIcon />,
        windows: <WindowsIcon />,
        xbox: <XboxIcon />,
    };

    return (
        <div className="flex items-center gap-1.5" aria-label="Available platforms">
            {platforms.map(platform => iconMap[platform] ? <span key={platform}>{iconMap[platform]}</span> : null)}
        </div>
    );
};

const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
    return (
        <div 
            className="flex flex-col bg-[#161b22] rounded-2xl p-4 text-center shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-[0_0_25px_0_rgba(57,255,20,0.3)]"
            onClick={onSelect}
            onKeyPress={(e) => e.key === 'Enter' && onSelect()}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${game.name}`}
        >
            <div className="relative mb-4">
                <img 
                    src={game.image} 
                    alt={`${game.name} icon`} 
                    className="w-32 h-32 mx-auto object-cover rounded-2xl border-2 border-[#9370DB]"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/130x130/161b22/ffffff?text=MOD')}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#39FF14] text-black font-bold rounded-full px-3 py-1 text-xs border-4 border-[#161b22] shadow-md">
                    MOD
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-center mt-2">
                <h3 className="font-bold text-white text-base truncate" title={game.name}>{game.name}</h3>
                <div className="flex justify-center items-center text-purple-300 text-xs mt-2 font-medium">
                    <PlatformIcons platforms={game.platforms} />
                    <div className="bg-purple-400 h-4 w-0.5 mx-3 rounded-full"></div>
                    <div className="flex items-center gap-1.5">
                        <DownloadCloudIcon />
                        <span aria-label={`${game.downloads} downloads`}>{game.downloads}+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;