const operations = require("./operations");
function printCalculation(operator, calculate){
    console.log("23 "+operator+" 7 = "+calculate(23, 7));
}
printCalculation("+", operations.sum);
printCalculation("-", operations.difference);
printCalculation("/", operations.quotient);
printCalculation("*", operations.product);
