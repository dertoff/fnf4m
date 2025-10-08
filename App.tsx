
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header.tsx';
import SearchBar from './components/SearchBar.tsx';
import GameGrid from './components/GameGrid.tsx';
import GameModal from './components/GameModal.tsx';
import Footer from './components/Footer.tsx';
import NavSidebar from './components/NavSidebar.tsx';
import CommunityModal from './components/CommunityModal.tsx';
import { ControllerIcon, InfoIcon } from './components/Icons.tsx';
import { gamesData } from './constants.ts';
import type { Game } from './types.ts';

// Extend the Window interface to include the external script's function
declare global {
    interface Window {
        _Jl?: () => void;
    }
}

// --- TOAST NOTIFICATION COMPONENT ---
interface ToastProps {
    message: string;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [onClose]);

    return (
        <div 
            className="fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-[1000] bg-gradient-to-r from-purple-500 to-green-400 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 animate-slideInDown"
            role="alert"
            aria-live="assertive"
        >
            <InfoIcon />
            <span>{message}</span>
        </div>
    );
};
// --- END TOAST COMPONENT ---


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGame, setSelectedGame] = useState<Game | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

    const filteredGames = useMemo(() => {
        if (!searchTerm) {
            return gamesData;
        }
        const lowercasedFilter = searchTerm.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
        return gamesData.filter(game =>
            game.name.toLowerCase().includes(lowercasedFilter) ||
            game.description.toLowerCase().includes(lowercasedFilter)
        );
    }, [searchTerm]);

    const handleGameSelect = (game: Game) => {
        setSelectedGame(game);
    };

    const handleCloseModal = () => {
        setSelectedGame(null);
    };
    
    const showToast = (message: string) => {
        setToastMessage(message);
    };

    const handleDownload = () => {
        console.log("Download button clicked. Checking for locker function...");
        if (typeof window._Jl === 'function') {
            window._Jl();
        } else {
            console.error("AdbluMedia locker function (_Jl) not found. The script might be blocked or failed to load.");
            alert("Error: Could not start the download process. Please disable any ad-blockers and refresh the page.");
        }
    };

    return (
        <div className="bg-[rgba(13,17,23,0.85)] min-h-screen pt-20 sm:pt-24">
            <NavSidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} onShowToast={showToast} />
            <CommunityModal isOpen={isCommunityModalOpen} onClose={() => setIsCommunityModalOpen(false)} onShowToast={showToast} />

            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
            
            <Header 
                onToggleNav={() => setIsNavOpen(true)} 
                onToggleCommunity={() => setIsCommunityModalOpen(true)} 
            />

            <main className="container mx-auto px-4">
                <section className="mb-8">
                    <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="flex items-center mt-8">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-[#39FF14] text-black shadow-[0_0.25rem_0.75rem_0_rgba(57,255,20,0.4)]">
                            <ControllerIcon />
                        </div>
                        <h1 className="ml-4 text-2xl font-bold">Top Game MODs</h1>
                    </div>
                </section>

                <GameGrid games={filteredGames} onGameSelect={handleGameSelect} />
            </main>

            {selectedGame && (
                <GameModal 
                    game={selectedGame} 
                    onClose={handleCloseModal} 
                    onDownload={handleDownload}
                />
            )}

            <Footer />
        </div>
    );
}

export default App;