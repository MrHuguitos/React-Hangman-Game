import { useRef, useEffect, useState } from "react";
import './ResultDialog.css'

const TryAgainIcon = () => (
    <svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24">
        <path d = "M19.89 10.105a8.696 8.696 0 0 0-.789-1.456l-1.658 1.119a6.606 6.606 0 0 1 .987 2.345 6.659 6.659 0 0 1 0 2.648 6.495 6.495 0 0 1-.384 1.231 6.404 6.404 0 0 1-.603 1.112 6.654 6.654 0 0 1-1.776 1.775 6.606 6.606 0 0 1-2.343.987 6.734 6.734 0 0 1-2.646 0 6.55 6.55 0 0 1-3.317-1.788 6.605 6.605 0 0 1-1.408-2.088 6.613 6.613 0 0 1-.382-1.23 6.627 6.627 0 0 1 .382-3.877A6.551 6.551 0 0 1 7.36 8.797 6.628 6.628 0 0 1 9.446 7.39c.395-.167.81-.296 1.23-.382.107-.022.216-.032.324-.049V10l5-4-5-4v2.938a8.805 8.805 0 0 0-.725.111 8.512 8.512 0 0 0-3.063 1.29A8.566 8.566 0 0 0 4.11 16.77a8.535 8.535 0 0 0 1.835 2.724 8.614 8.614 0 0 0 2.721 1.833 8.55 8.55 0 0 0 5.061.499 8.576 8.576 0 0 0 6.162-5.056c.22-.52.389-1.061.5-1.608a8.643 8.643 0 0 0 0-3.45 8.684 8.684 0 0 0-.499-1.607z"></path>
    </svg>
);

function ResultDialog({ isOpen, resultado, palavra }) {
    const dialogRef = useRef(null);
    const [stats, setStats] = useState({ jogadas: '', vitorias: '' });

    useEffect(() => {
        const dialogElement = dialogRef.current;

        if (isOpen) {
            dialogElement?.showModal();

            const jogadasAtuais = localStorage.getItem('partidasJogadas') || 0;
            const vitoriasAtuais = localStorage.getItem('vitorias') || 0;

            localStorage.setItem('partidasJogadas', (jogadasAtuais + 1));
            localStorage.setItem('vitorias', (resultado === 'win' ? vitoriasAtuais + 1 : vitoriasAtuais));

            setStats({ jogadas: (jogadasAtuais + 1), vitorias: (resultado === 'win' ? vitoriasAtuais + 1 : vitoriasAtuais) });
        }
    }, [isOpen, resultado]);

    return (
        <dialog id="resultado" ref = {dialogRef}>
            <div id="titulo">
                <h2 className = {resultado}>{(resultado == 'win') ? '[ YOU WIN ]' : '[ YOU LOSE ]'}</h2>
            </div>
            <div className = "dialog-content">
                <div id="text-result">
                    <p>A palavra era: <strong>{palavra}</strong></p>
                    <div className = "stats">
                        <p>Partidas jogadas: <strong>{stats.jogadas}</strong></p>
                        <p>Vitórias: <strong>{stats.vitorias}</strong></p>
                    </div>
                </div>
                <button className = "botao" onClick = {() => window.location.reload()}>
                    <TryAgainIcon />
                </button>
            </div>
        </dialog>
    );
}

export default ResultDialog;