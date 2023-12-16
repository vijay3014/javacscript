function longest_Words(inputString) {
    let words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > words[0].length) {
    }

    let resultString = words.join(' ');

    return resultString;
}

let Input = prompt('Enter a string:');
let output = longest_Words(Input);

console.log(output);
}