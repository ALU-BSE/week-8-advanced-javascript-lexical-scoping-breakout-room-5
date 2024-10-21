function Lexical() {
  let globalVar = 10; // private variable

  // Function to add value to globalVar
  function addValue(x) {
    return x + globalVar;
  }

  // Function to multiply a value by globalVar
  function multiplyByGlobal(y) {
    return y * globalVar;
  }

  // Function to update globalVar
  function updateGlobal(newValue) {
    globalVar = newValue;
  }

  // Expose the methods that can access globalVar
  return {
    addValue,
    multiplyByGlobal,
    updateGlobal
  };
}

// Example usage
const lexicalFunctions = Lexical();  // Create an instance of the Lexical function

console.log(lexicalFunctions.addValue(5));          // Output: 15
console.log(lexicalFunctions.multiplyByGlobal(2));  // Output: 20

lexicalFunctions.updateGlobal(5);                   // Update globalVar to 5

console.log(lexicalFunctions.addValue(5));          // Output: 10
