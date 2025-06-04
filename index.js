// We call this function to get every valid move from the position our knight is currently in
function getValidMoves(position) {
  const moves = [
    [2, 1], [2, -1],
    [-2, 1], [-2, -1],
    [1, 2], [1, -2],
    [-1, 2], [-1, -2]
    ];

    const [x, y] = position; 
    const validMoves = [];  

    for (let [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            validMoves.push([newX, newY]);
        }
    }
    return validMoves;
}

// Keep doing knight moves until we find the goal
function knightMoves(start, goal){
    if (!isValidPosition(start) || !isValidPosition(goal)) {
        return "Invalid start or goal position.";
    }
    
    let queue = [{ position: start, path: [start] }];
    let visited = new Set(); // make visited an object, to avoid infinite loops (already visited squares are ignored)
    visited.add(start.toString());

    while(queue.length > 0){
        let current = queue.shift();
        let nextMoves = getValidMoves(current.position);
        for(let move of nextMoves){
            const key = move.toString();
            if(move[0] === goal[0] && move[1] === goal[1]){
                return [...current.path, move];
            }
            if(!visited.has(key)){
                visited.add(key);
                queue.push({
                    position: move,
                    path: [...current.path, move]
                });
            }
        }
    }
    return "No path found";
}
// Makes sure you can't enter invalid starting positions or goals
function isValidPosition(pos) {
    if (!Array.isArray(pos) || pos.length !== 2) return false;
    const [x, y] = pos;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function printPath(path) {
    if (typeof path === "string") {
        console.log(path);
        return;
    }
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
}

// Example usage
let path = (knightMoves([2, 0], [7, 6]));
printPath(path);
