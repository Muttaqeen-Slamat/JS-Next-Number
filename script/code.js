let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;

function displayNextElement() {
    if (index < array.length) {
        console.log(array[index]);
        index++;
    } else {
        console.log("End of array reached");
    }
}


// Loop
for (let i = 0; i < array.length; i++) {
    displayNextElement();
}