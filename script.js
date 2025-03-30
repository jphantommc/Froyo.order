let userInput = prompt("Enter Froyo Flavors:");

if (userInput !== null) {
  console.log("You entered: " + userInput);
} else {
  console.log("You should not be here:");
}

const inputArray = userInput.split(",");

console.log(inputArray);

const countFlavors = (arr) => {
    const count = {};
    for (let flavor of arr) {
      flavor = flavor.trim();
      flavor in count ? (count[flavor] += 1) : (count[flavor] = 1);
    }
    return count;
  };
  
  console.table(countFlavors(flavors));