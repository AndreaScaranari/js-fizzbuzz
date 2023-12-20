// Print in console
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Approccio Manipolazione del DOM
// Individuo la row target
const fuzzBoard = document.getElementById("fuzzboard");

// Creare elemento in pagina e stilizzarlo
const list = document.createElement("ul");
list.classList.add("list-unstyled", "row", "justify-content-center");

// ciclo for con gli if a seconda dei risultati
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("col-1");
    if (i % 3 == 0 && i % 5 == 0) {
        listItem.append("FizzBuzz");
        list.appendChild(listItem);
    } else if (i % 3 == 0) {
        listItem.append("Fizz");
        list.appendChild(listItem);
    } else if (i % 5 == 0) {
        listItem.append("Buzz");
        list.appendChild(listItem);
    } else {
        listItem.append(i);
        list.appendChild(listItem);
    }
}

// stampa in pagina
fuzzBoard.appendChild(list);