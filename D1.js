/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Quando parliamo di datatype, si intendono i tipi di valori che possono essere attribuiti ad una determinata variabile, ovvero facciamo finta che la nostra variabile 
// sia un contenitore, una scatola sulla quale applichiamo una determinata targhetta con il nome e all'interno di questa scatola andiamo a metterci un qualcosa, può essere del cibo, 
// possono essere degli oggetti ecc, allo stesso modo esistono diversi tipi di dati che possiamo "assegnare" alla nostra variabile, i diversi tipi sono:
// Una Stringa: ovvero un insieme di caratteri compresi tra due apici che possono essere le due virgolette o tra due apostrofi. Es:
let cat = ("Fuffy")
console.log('Valore "Stringa"' , cat)
// Un numero: 17, 24, 85 ecc es: 
let age = 23
console.log("Valore numerico", age)
// Un valore booleano: true o false es: 
let blueSky = true
console.log("Valore booleano", blueSky)
// Un valore null: (una scatola vuota senza alcun contenuto) es: 
let emptyBox = null
console.log("Valore nullo", emptyBox)
// Un valore undefined: questo tipo di valore si verifica quando creiamo una variabile senza assegnarle nessun valore (quindi una scatola chiusa con un contenuto a noi sconosciuto) es: 
let dog
console.log("Valore indefinito", dog)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = ("Rachele")
console.log(myName)
// oppure si può anche scrivere
// let myName
// myName = ("Rachele")

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 12
let num2 = 20
console.log("la somma è:", num1 + num2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = ("Trimboli")
console.log(myName)
// la variabile "myName" l'avevo precedentemente dichiarata con "let" e per questo ora ho potuto ri-assegnarle un valore, se provo a fare la stessa cosa con "const" questo non posso farlo
// const mySurname = ("Trimboli")
// mySurname = ("Rachele")
// console.log(mySurname)
// questo mi genera un errore sulla console poichè io posso assegnare solo una volta un valore ad una variabile const, una volta assegnata quella sarà una variabile fissa.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4)
// oppure
let subtraction = x - 4
console.log("Sottrazione", subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = ("john")
let name2 = ("John")
console.log(name1 !== name2)
let test = name2 = "john"? true : false
console.log(test)
// Ho creato una variabile "test" e l'ho definita in modo che sia true se name 2 è uguale "john" e false se non è uguale a "john", per dimostare che le
// due variabili sarebbero uguali se fossero scritte entrambe in lowercase