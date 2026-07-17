import { useState } from "react";
import ResultDialog from "./ResultDialog.jsx";
import './Game.css';
import forca0 from '../assets/forca0.svg';
import forca1 from '../assets/forca1.svg';
import forca2 from '../assets/forca2.svg';
import forca3 from '../assets/forca3.svg';
import forca4 from '../assets/forca4.svg';
import forca5 from '../assets/forca5.svg';
import forca6 from '../assets/forca6.svg';

const imagensForca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(227, 227, 227, 1)" }}>
        <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"></path>
    </svg>
)

function Game({ palavra }) {
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [input, setInput] = useState('');
    const [warning, setWarning] = useState('');
    const [letrasUsadas, setLetrasUsadas] = useState([]);

    const letrasPalavra = palavra.toUpperCase().split('');
    const imgForca = imagensForca[erros];

    const handleChange = (event) => {
        setWarning('');
        event.preventDefault();
        const letra = event.target.value;
        const letter = letra.replace(/[^a-z]/gi, '').slice(0, 1);

        setInput(letter.toUpperCase());
    };

    const handlePlay = () => {
        if (!input) {
            setWarning('Digite uma letra!');
            return;
        }
        if (letrasUsadas.includes(input)) {
            setWarning('Essa letra já foi usada!');
            return;
        }

        setLetrasUsadas([...letrasUsadas, input]);

        if (letrasPalavra.includes(input)) {
            let novosAcertos = 0;

            letrasPalavra.forEach((letra) => {
                if (letra === input) {
                    novosAcertos++;
                }
            });

            setAcertos(acertos + novosAcertos);
        } else {
            setErros(erros + 1);
        }

        setInput('');
    };

    return (
        <div className="body">
            <div className="game">
                <div className="img_config">
                    <div className="img">
                        <img src={imgForca} alt="Imagem da forca" id="imagemForca" />
                    </div>
                </div>
                <div className="config">
                    <div className="lista-letras">
                        {letrasPalavra.map((letra, i) => (
                            <span key={i} className="letra-secreta">
                                {letrasUsadas.includes(letra) ? letra : '*'}
                            </span>
                        ))}
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        handlePlay();
                    }}>
                        <label>Digite uma letra:</label>
                        <input type="text" name="texto" value={input} onChange={handleChange} />
                        <button type="submit" name="enviar">
                            <SendIcon />
                        </button>
                        {warning && <span className="warning">{warning}</span>}
                    </form>
                </div>
            </div>
            <div className="letras_usadas">
                <div className="letras_inputs">
                    <div className="letrasUsadas">
                        {letrasUsadas.map((letra) => (
                            <span key={letra} className={letrasPalavra.includes(letra) ? "letra-certa" : "letra-errada"}>
                                {letra}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <ResultDialog
                isOpen={acertos === letrasPalavra.length || erros === 6}
                resultado={acertos === letrasPalavra.length ? 'win' : 'lose'}
                palavra={palavra}
            />
        </div>
    );
}

export default Game;