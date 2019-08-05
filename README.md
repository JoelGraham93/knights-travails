# Knights Travails

Find the shortest sequence of moves for a Knight between the starting and ending positions

This solution implements the breadth-first search algorithm as a chessboard can be represented as a graph of nodes. 
This allows exploration of all the neighbouring squares that a knight can visit from it's current square - eventually resulting in the end square being found, and a path returned.

## External libraries

* [TypeScript](https://github.com/microsoft/TypeScript): A typed superset of JavaScript that compiles to plain JavasScript
* [Yargs](https://github.com/yargs/yargs): A node.js library to help build interactive command line tools
* [Jest](https://github.com/facebook/jest): A comprehensive JavaScript testing solution

## Installation

```
$ git clone https://github.com/JoelGraham93/knights-travails
$ cd knights-travails
```

Install the project dependencies using npm:

```
$ npm i
```

## Unit testing

To run the unit tests:

```
npm run test
```

To run the unit tests in watch mode:

```
npm run test -- --watchAll
```

## Run the project

From the root directory run:

```
sp -- --start=<startSquare> --end=<endSquare>
```

Returns the shortest path from start to end

## Example

```
npm run sp -- --start=A8 --end=G8

[ 'B6', 'C8', 'E7', 'G8' ]

node dist/index shortestPath --start=A8 --end=G8

[ 'B6', 'C8', 'E7', 'G8' ]
```
