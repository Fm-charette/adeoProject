# AdeoProject

This is my repository for the test project of Adeo.

## Installation

Use the Node Package Manager to install the testing library by running the following command in your terminal:
```bash
npm install
```
This will install the Jest package

## Filter
To use the filter function, run the following command in your terminal:

```
node mainFilter.js "args"
```
The args correspond to the pattern used in the function (example: ra or RA).

## Count

To use the count function, run the following command in your terminal:

```
node mainCount.js
```
## Testing

To test both filter.js and count.js, navigate to the test directory:
```
cd test
```
Then run the following command:

```
npm run test
```
If you want to see the test results of a specific file, use this command in your terminal:

```
npm test -- "nameOfTheFile.js"
```
