// ! Print in console
// for (let i = 1; i <= 100; i++) {
//     let content = i;
//     if (i % 3 == 0 && i % 5 == 0) {
//         content = "FizzBuzz";
//     } else if (i % 3 == 0) {
//         content = "Fizz";
//     } else if (i % 5 == 0) {
//         content ="Buzz";
//     }
//     console.log(content);
// }

// ! Approccio Manipolazione del DOM
// Individuo la row target
const fuzzBoard = document.getElementById("fuzzboard");

// Creare elemento in pagina e stilizzarlo
const list = document.createElement("ul");
list.classList.add("list-unstyled", "d-flex", "flex-wrap","justify-content-center");

// ciclo for con gli if a seconda dei risultati
for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement("li");
    let content = i;

    if (i % 3 === 0 && i % 5 === 0) {
        content = "FizzBuzz";
    } else if (i % 3 === 0) {
        content = "Fizz";
    } else if (i % 5 === 0) {
        content = "Buzz";
    }
    
    if (isNaN(content)) listItem.classList.add(content);
    listItem.append(content);
    list.appendChild(listItem);

}

// stampa in pagina
fuzzBoard.appendChild(list);

// ! template literal 
// const list = document.getElementById("fuzzboard");
// let items = " ";

// for (let i = 1; i >= 100; i++) {
//     let content = i;
//     if (i % 15 === 0) {
//         content = "FizzBuzz";
//     } else if (i % 3 == 0) {
//         content = "Fizz";
//     } else if (i % 5 == 0) {
//         content ="Buzz";
//     }

//     let className = isNaN(content) ? content : " ";
//     items += `<li class = "${className}">${content}</li>`;
// }

// list.innerHTML = items;