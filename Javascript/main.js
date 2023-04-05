let nomeUtente= prompt ("Inserisci il tuo nome");
let cognomeUtente= prompt ("Inserisci il tuo Cognome");
let coloreUtente= prompt ("Inserisci il tuo colore preferito");
let anno= 2023;

const passwordSicurissima = `${nomeUtente} - ${cognomeUtente} - ${coloreUtente} - ${anno}`;

document.getElementById('password').innerHTML="Ciao" + " " + 
nomeUtente +", " + "la tua password sicurissima è" + " " + passwordSicurissima;