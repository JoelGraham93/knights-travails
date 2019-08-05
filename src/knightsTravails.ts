export function validateInput(start: string, end: string): boolean {
  let pattern = new RegExp(/^[A-Ha-h][1-8]$/);

  if (pattern.test(start) && pattern.test(end)) {
    return true;
  } else {
    return false;
  }
}

export function convertToNumber(chessNotation: string): number[] {
  let cooridnates = chessNotation.split("");
  return [cooridnates[0].toLowerCase().charCodeAt(0) - 96, parseInt(cooridnates[1])];
}

export function convertToString(num: number[]): string {
  return (String.fromCharCode(num[0] + 96) + num[1].toString()).toUpperCase();
}

export function knightsTravails(startSquare: string, endSquare: string): string[] {
  const start = convertToNumber(startSquare);
  const end = convertToNumber(endSquare);

  let q = [[start]];
  let visited = [];

  while (q.length > 0) {
    const path = q.shift()
    // get the latest position in the path sequence
    const position = path[path.length - 1];
    visited.push(position);

    if (position[0] === end[0] && position[1] === end[1]) {
      const shortestPath = path.map((coordinate) => {
        return convertToString(coordinate);
      });
      return shortestPath.slice(1, shortestPath.length);
    }

    const moves = generateMoves(position);

    moves.forEach((move) => {
      // if square has not been visited, concat it to the path and push it to the queue 
      if (!(visited.indexOf(JSON.stringify(move)) >= 0)) q.push(path.concat([move]));
    })
  }
}

function generateMoves(pos: number[]): number[] {
  const moves = [];

  moves.push([pos[0] + 1, pos[1] - 2]);
  moves.push([pos[0] + 1, pos[1] + 2]);
  moves.push([pos[0] + 2, pos[1] + 1]);
  moves.push([pos[0] + 2, pos[1] - 1]);
  moves.push([pos[0] - 1, pos[1] + 2]);
  moves.push([pos[0] - 1, pos[1] - 2]);
  moves.push([pos[0] - 2, pos[1] + 1]);
  moves.push([pos[0] - 2, pos[1] - 1]);

  return moves.filter((move) => {
    return isValidMove(move);
  });
}

export function isValidMove(move: number[]): boolean {
  return move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8;
}
