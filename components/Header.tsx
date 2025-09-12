
import React from 'react';
import { ListIcon, PeopleIcon } from './Icons.tsx';

interface HeaderProps {
    onShowToast: (message: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onShowToast }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3F0071] shadow-lg">
            <button 
                onClick={() => onShowToast('Navigation menu under development!')} 
                className="text-white text-3xl transition-colors duration-300 hover:text-[#FF69B4]"
                aria-label="Navigation Menu"
            >
                <ListIcon />
            </button>
            <div className="h-10 sm:h-12">
                <img 
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22ff14e5-7326-4191-88de-13e4eb490386/dee5gjo-8f3d4f99-4c93-4bc5-a02d-653b27d2885c.png/v1/fill/w_1158,h_690/friday_night_funkin____logo_by_peasters_dee5gjo-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU0NyIsInBhdGgiOiJcL2ZcLzIyZmYxNGU1LTczMjYtNDE5MS04OGRlLTEzZTRlYjQ5MDM4NlwvZGVlNWdqby04ZjNkNGY5OS00YzkzLTRiYzUtYTAyZC02NTNiMjdkMjg4NWMucG5nIiwid2lkdGgiOiI8PTQyNzAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n6RTbdMHlzCmrtz4-40tqb3BXzftxOQhCFbj9TK1aVM" 
                    alt="Free FNF MOD Games Logo" 
                    className="h-full object-contain"
                />
            </div>
            <button 
                onClick={() => onShowToast('Community features coming soon!')} 
                className="text-white text-3xl transition-colors duration-300 hover:text-[#FF69B4]"
                aria-label="Community"
            >
                <PeopleIcon />
            </button>
        </header>
    );
};

export default Header;