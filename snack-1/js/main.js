/* 
Snack 1
1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Codice giocatore
- Nome
- Cognome
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali 
e 3 cifre casuali
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
3. Stampare Nome, cognome, età e codice giocatore.
4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la 
percentuale di successo per i tiri da 3 punti superiore all’80%.
*/



















/* ---------FUNCTION---------- */
// Generiamo un numero random
function randomNum(num) {
    const genNum = Math.floor( Math.random() * num );

    return genNum
}


//generiamo le 3 lettere per il codice giocatore
function makeLetter(length) {
    let result = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    for (let i = 0; i < length; i++) {
        result += letters[Math.floor( Math.random() * 21 )]
       
        

    }
    return result
}

console.log(makeLetter(3));


