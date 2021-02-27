const importedSum = require('./myModule/sum')

const result1 = importedSum.sum(8, 10);
const result2 = importedSum.subtract(8, 10);

console.log(result1, result2);