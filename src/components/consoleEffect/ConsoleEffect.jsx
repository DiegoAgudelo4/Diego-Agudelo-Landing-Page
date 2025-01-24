import { useEffect } from 'react';
import styles from './ConsoleEffect.module.css';

const consoleText = (words, id, colors) => {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;
    const con = document.getElementById('console');
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);

    const intervalId = setInterval(() => {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            setTimeout(() => {
                const usedColor = colors.shift();
                colors.push(usedColor);
                const usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000); //espera para volver a escribir
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 10000); //espera para volver a borrar
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);

    const blinkId = setInterval(() => {
        if (visible === true) {
            con.className = `${styles.consoleUnderscore} ${styles.hiddenText}`;
            visible = false;
        } else {
            con.className = styles.consoleUnderscore;
            visible = true;
        }
    }, 400);

    return () => {
        clearInterval(intervalId);
        clearInterval(blinkId);
    };
};
const ConsoleEffect = ({preText='>',texts = ['Text', 'Example'], colors = ['white', 'white']}) => {
    useEffect(() => {
        const cleanup = consoleText(
            texts,
            'text',
            colors
        );
        return cleanup;
    }, []);
    return (
        <div className={styles.consoleContainer}>
            {preText} <span id="text" className={styles.textPers}></span>
            <div className={styles.consoleUnderscore} id="console">
                &#95;
                {/* : */}
                {/* | */}
                {/* _ */}
            </div>
        </div>
    )
}
// ConsoleEffect.prototype= {
//     texts: Array.isArray,
// }

export default ConsoleEffect