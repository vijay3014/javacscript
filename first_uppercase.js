function capitalizeWords(inputString) {
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    let resultString = words.join(' ');

    return resultString;
}

let Input = prompt('Enter a string:');
let output = capitalizeWords(Input);

console.log(output);
