const fs = require('fs');

const input = 'data.txt';
const output = 'output.txt';

// Read the input file and create a map to save the index
const employeeCodes = fs.readFileSync(input, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

const employeeMap = new Map(employeeCodes.map((code, index) => [index + 1, code]));

// sort the map according to the first letter if the same then compare the last letter 
//In the case the data have the same first and last letter then compare the number between the letters (smallest first)
const sortedEmployeeMap = new Map([...employeeMap.entries()].sort((a, b) => {
    const firstCharA = a[1][0].toLowerCase();
    const firstCharB = b[1][0].toLowerCase();

    if (firstCharA !== firstCharB) {
        return firstCharA.localeCompare(firstCharB);
    }

    const lastCharA = a[1][a[1].length - 1].toLowerCase();
    const lastCharB = b[1][b[1].length - 1].toLowerCase();

    if (lastCharA !== lastCharB) {
        return lastCharA.localeCompare(lastCharB);
    }

    const numA = parseInt(a[1].substring(1, a[1].length - 1));
    const numB = parseInt(b[1].substring(1, b[1].length - 1));

    return numA - numB;
}));

const outputString = Array.from(sortedEmployeeMap.entries())
    .map(([key, value]) => `Line ${key}: ${value}`)
    .join('\n');

// Write the sorted data to the output file
fs.writeFileSync(output, outputString, 'utf-8');

console.log(`SortedEmployees written to ${output}`);
