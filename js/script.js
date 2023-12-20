// ## Scaletta
// 1. creare generatore di numeri con ciclo for
// 2. inserire if per i fizzbuzz
// 3. inserire if per i fizz
// 4. inserire if per i buzz
// 5. stampare in console

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}