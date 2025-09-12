import React from 'react';
import type { Game } from '../types.ts';
import { AppleIcon, AndroidIcon, DownloadCloudIcon } from './Icons.tsx';

interface GameCardProps {
    game: Game;
    onSelect: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
    return (
        <div 
            className="flex flex-col bg-[#261447] rounded-2xl p-4 text-center shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
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
                    className="w-32 h-32 mx-auto object-cover rounded-2xl border-2 border-[#4A148C]"
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/130x130/261447/ffffff?text=FNF+MOD')}
                />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FF4081] text-white font-bold rounded-full px-3 py-1 text-xs border-4 border-[#261447] shadow-md">
                    MOD
                </div>
            </div>
            <div className="flex-grow flex flex-col justify-center mt-2">
                <h3 className="font-bold text-white text-base truncate" title={game.name}>{game.name}</h3>
                <div className="flex justify-center items-center text-cyan-300 text-xs mt-2 font-medium">
                    <div className="flex items-center gap-1.5" aria-label="Available platforms">
                        <AndroidIcon />
                        <AppleIcon />
                    </div>
                    <div className="bg-cyan-400 h-4 w-0.5 mx-3 rounded-full"></div>
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
