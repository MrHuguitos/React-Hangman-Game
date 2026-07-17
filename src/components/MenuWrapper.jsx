import { useState } from 'react';
import { Link } from 'react-router-dom';
import pixelLogo from '../assets/pixel.svg';
import HelpDialog from './HelpDialog.jsx';
import AboutDialog from './AboutDialog.jsx';
import './MenuWrapper.css'

const HelpIcon = () => (
    <svg xmlns = "http://www.w3.org/2000/svg" width = "30" height = "30" fill = "currentColor" viewBox = "0 0 24 24">
        <path d = "M11 16h2v2h-2z"></path>
        <path d = "M16.71 2.29A1 1 0 0 0 16 2H8c-.27 0-.52.11-.71.29l-5 5A1 1 0 0 0 2 8v8c0 .27.11.52.29.71l5 5c.19.19.44.29.71.29h8c.27 0 .52-.11.71-.29l5-5A1 1 0 0 0 22 16V8c0-.27-.11-.52-.29-.71zM20 15.58l-4.41 4.41H8.42l-4.41-4.41V8.41L8.42 4h7.17L20 8.41z"></path>
        <path d = "M13.27 6.25c-2.08-.75-4.47.35-5.21 2.41l1.88.68c.18-.5.56-.9 1.07-1.13s1.08-.26 1.58-.08a2.01 2.01 0 0 1 1.32 1.86c0 1.04-1.66 1.86-2.24 2.07-.4.14-.67.52-.67.94v1h2v-.34c1.04-.51 2.91-1.69 2.91-3.68a4.015 4.015 0 0 0-2.64-3.73"></path>
    </svg>
)

const AboutIcon = () => (
    <svg xmlns = "http://www.w3.org/2000/svg" width = "30" height = "30" fill = "currentColor" viewBox = "0 0 24 24">
        <path d = "M11 11h2v6h-2zm0-4h2v2h-2z"></path>
        <path d = "M16.71 2.29A1 1 0 0 0 16 2H8c-.27 0-.52.11-.71.29l-5 5A1 1 0 0 0 2 8v8c0 .27.11.52.29.71l5 5c.19.19.44.29.71.29h8c.27 0 .52-.11.71-.29l5-5A1 1 0 0 0 22 16V8c0-.27-.11-.52-.29-.71zM20 15.58l-4.41 4.41H8.42l-4.41-4.41V8.41L8.42 4h7.17L20 8.41z"></path>
    </svg>
)

function MenuWrapper() {
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    return (
        <header className = "menu__wrapper">
            <div className = "menu__bar">
                <Link to = "/" title = "Home" aria-label = "Recarregar" className = "logo">
                    <img src = {pixelLogo} alt = "Game logo" className = "pixel-icon" />
                </Link>
                <span className = "pixel-text">F O R * A</span>
            </div>
            <div className = "menu__info">
                <button className = "but_info" id = "but_help" aria-label = "Ajuda" onClick={() => setIsHelpOpen(true)}>
                    <HelpIcon />
                </button>
                <button className = "but_info" id = "but_about" aria-label = "Sobre" onClick={() => setIsAboutOpen(true)}>
                    <AboutIcon />
                </button>
            </div>

            <HelpDialog
                isOpen = {isHelpOpen}
                onClose = {() => setIsHelpOpen(false)}
            />
            <AboutDialog
                isOpen = {isAboutOpen}
                onClose = {() => setIsAboutOpen(false)}
            />
        </header>
    );
}

export default MenuWrapper;