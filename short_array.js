let userInput = prompt('Enter a string:');

    let result = sortStringAlphabetically(userInput);
    console.log('Sorted String:', result);


function sortStringAlphabetically(inputString) {

    let charArray = inputString.split('');
  
    charArray.sort();
  
    let sortedString = charArray.join('');
  
    return sortedString;
  }
  
  
  