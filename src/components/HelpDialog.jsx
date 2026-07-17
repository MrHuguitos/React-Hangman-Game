import { useEffect, useRef } from "react";
import './HelpDialog.css'

const CloseIcon = () => (
    <svg xmlns = "http://www.w3.org/2000/svg" x = "0px" y = "0px" width = "30" height = "30" viewBox = "0 0 50 50">
        <path d = "M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
    </svg>
)

function HelpDialog({ isOpen, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogElement = dialogRef.current;

        if (isOpen) dialogElement?.showModal();
        else dialogElement?.close();
    }, [isOpen]);

    return (
        <dialog id = "how_play" ref={dialogRef} onCancel={onClose}>
            <div className = "dialog-tutorial">
                <button aria-label="Fechar" className = "btnFechar" onClick={onClose}>
                    <CloseIcon />
                </button>
                <h2>COMO JOGAR?</h2>
                <p>Adivinhe a palavra secreta! <strong>Cuidado: </strong>erros desenham a forca. Complete a palavra antes que o boneco seja enforcado para vencer.</p>
            </div>
        </dialog>
    );
}

export default HelpDialog;