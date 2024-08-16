# AdeoProject

This is my repository for the test project of adeo

## Installation

Use the node package manager to install the testing library,
write the command line in your terminal :

```bash
npm i
```
It will install the jest package

## Filter
To use the filter function write the command in your terminal
```
node mainFilter.js "args"
```
the args correspond to the pattern used in the function exemple: ra or RA

## Count
To use the count function write the command in your terminal
```
node mainCount.js
```
This will execute the function and print the result

## Testing

To test both of the file filter.js and count.js go to the test directory
```
cd test
```
Then write the command 
```
npm run test
```
If you want to see the test result of one file, write this command in your termminal
```
npm test -- "nameOfTheFile.js"
```
