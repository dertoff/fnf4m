
import React from 'react';

export const ListIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
);

export const CommunityIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className={`bi bi-people-fill ${className}`} viewBox="0 0 16 16">
        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
    </svg>
);

export const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
);

export const ControllerIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1H3v-1h1v-1z"/>
        <path d="M3.051 3.27a.5.5 0 0 1 .354-.627l1.98-1.98a.5.5 0 0 1 .707 0l1.98 1.98a.5.5 0 0 1-.353.853H3.051zM1.11 3.27a.5.5 0 0 1-.354.627l-1.98 1.98a.5.5 0 0 1 0 .707l1.98 1.98a.5.5 0 0 1 .353.147h3.393a.5.5 0 0 1 .353-.146l1.98-1.98a.5.5 0 0 1 0-.708l-1.98-1.98a.5.5 0 0 1-.353-.853H1.11z"/>
    </svg>
);

export const AndroidIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.353.846a.5.5 0 0 1 .647.746l-.803.804a.5.5 0 0 1-.747-.646l.803-.804a.5.5 0 0 1 .1-.1zM4.647.846a.5.5 0 0 0-.647.746l.803.804a.5.5 0 0 0 .747-.646L4.647.846z"/>
        <path d="M14 4.082a9.42 9.42 0 0 0-12 0 .5.5 0 0 0-.444.664l1.362 4.331A.5.5 0 0 0 3.5 9.5h9a.5.5 0 0 0 .582-.423l1.362-4.331A.5.5 0 0 0 14 4.082M6.5 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
);

export const AppleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
      <path d="M11.182.008C10.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.853-.012-.011-1.057-.627-2.25-1.135-1.212-.516-2.566-.536-3.075-.516-.942.03-1.539.58-1.965.58-.426 0-1.753-.516-3.075-.466-.974.03-1.657.437-2.28.877-1.134.796-1.924 2.378-1.924 2.378s-1.374 1.793.849 4.417c1.134 1.344 2.458 1.386 3.017 1.386.604 0 2.222-.447 3.075-.447.83 0 1.645.447 2.502.447.986 0 1.502-.82 1.572-.864-.04-.032-.176-.11-1.698-1.182-1.103-.779-1.31-1.777-1.31-1.777s.596-.54 1.258-.54c.662 0 1.374.54 1.374.54s.123.935-.773 1.954c-.936 1.057-1.965 1.813-1.965 1.813s-1.515.99-3.365.99c-1.83 0-2.713-.99-3.365-.99-.968 0-1.374-1.61-1.374-3.223 0-1.227.493-2.324 1.04-2.845.547-.522 1.097-.733 1.559-.733.46 0 1.313.211 2.02.82.68.58 1.02.82 1.732.82.69 0 1.227-.437 1.829-.877.662-.48 1.374-.82 2.475-.82.926 0 1.657.303 2.28.627.08.04.164.08.246.127a3.81 3.81 0 0 1-.227.02z"/>
    </svg>
);

export const WindowsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 2.5h6.5v11H0V2.5zm7.5 0H16v4.91H7.5V2.5zm0 5.82H16V13.5H7.5V8.32z"/>
    </svg>
);

export const XboxIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.436 2.54a.5.5 0 0 0-.435.252L2.001 9.423a.5.5 0 0 0 .435.747h3.425a.5.5 0 0 0 .435-.252L9.999 3.547a.5.5 0 0 0-.435-.747H6.436zM9.363 3.547l-1.94 3.32h3.426a.5.5 0 0 0 .435-.252l2.001-6.876a.5.5 0 0 0-.435-.747H9.363zM3.465 11.214a.5.5 0 0 0-.435.252L.03 14.84a.5.5 0 0 0 .435.747h6.073a.5.5 0 0 0 .435-.252L9.974 8.46a.5.5 0 0 0-.435-.747H3.465zm6.538 0-1.94 3.32h3.426a.5.5 0 0 0 .435-.252l2.001-6.876a.5.5 0 0 0-.435-.747h-3.48z"/>
    </svg>
);

export const DownloadCloudIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
    </svg>
);

export const BoxIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 9H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zM2 8a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z"/>
        <path d="M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
    </svg>
);

export const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>
);

export const ReviewsIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
);

export const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
);

export const DownloadCloudFillIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
    </svg>
);

export const InfoIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8.93 6.588l-2.29.287-.082.38.45.083c.294.055.492.206.596.422.107.22.164.465.164.717 0 .285-.067.54-.2.75-.133.21-.336.375-.606.495l-.25.105c-.14.06-.25.14-.33.24s-.14.22-.19.35-.08.27-.08.41c0 .21.06.39.18.52.12.13.28.19.49.19.22 0 .42-.06.59-.19.17-.12.26-.29.28-.49.02-.2.07-.35.14-.45.07-.1.18-.18.31-.25l.25-.105c.2-.08.35-.19.46-.33.11-.14.17-.3.17-.48 0-.25-.06-.48-.18-.68-.12-.2-.29-.35-.5-.45l-.2-.07c-.15-.05-.28-.13-.39-.23-.11-.1-.17-.22-.17-.37 0-.14.05-.27.15-.38.1-.11.23-.16.39-.16.17 0 .32.05.45.16.13.11.2.26.2.46h.91c0-.33-.08-.63-.25-.89-.17-.26-.42-.46-.74-.59zM8 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
);

export const HomeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
    </svg>
);

export const StarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
);

export const NewIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-calendar-plus-fill" viewBox="0 0 16 16">
        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z"/>
    </svg>
);

export const CategoryIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
    </svg>
);

export const AboutIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
);

export const BellIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
    </svg>
);