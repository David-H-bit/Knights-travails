# Knight's Travails

A JavaScript solution to find the shortest path for a chess knight to move from one square to another on a chessboard using BFS (Breadth-First Search).

## Features

- Finds the shortest possible path between any two squares
- Uses BFS algorithm to guarantee optimal solution
- Validates input positions
- Prevents infinite loops with visited tracking
- Clean path visualization

## Quick Start

```javascript
// Find shortest path from [0,0] to [7,7]
const path = knightMoves([0, 0], [7, 7]);
printPath(path);

// Output:
// You made it in 6 moves! Here's your path:
// [0,0]
// [2,1]
// [4,2]
// [6,3]
// [7,5]
// [5,6]
// [7,7]
```

## Usage

```javascript
// Basic usage
const path = knightMoves([startX, startY], [goalX, goalY]);

// Examples
knightMoves([0, 0], [1, 2]);  // Simple L-shape move
knightMoves([0, 0], [7, 7]);  // Corner to corner
knightMoves([3, 4], [4, 3]);  // Adjacent squares
```

## How It Works

The algorithm uses **Breadth-First Search (BFS)** to explore all possible knight moves level by level:

1. Start from the initial position
2. Generate all valid knight moves (L-shaped: 2+1 squares)
3. Add unvisited positions to a queue with their complete path
4. Continue until the goal is reached
5. Return the shortest path found

Since BFS explores positions by distance from start, the first path found is guaranteed to be the shortest.

## Functions

| Function | Description |
|----------|-------------|
| `knightMoves(start, goal)` | Main function - returns shortest path array |
| `getValidMoves(position)` | Gets all valid knight moves from a position |
| `isValidPosition(pos)` | Validates if position is on the 8x8 board |
| `printPath(path)` | Pretty-prints the path with move count |

## Examples

```javascript
// Corner to corner (longest possible distance)
let path = knightMoves([0, 0], [7, 7]);
printPath(path); // 6 moves

// Adjacent squares
path = knightMoves([3, 4], [4, 3]);
printPath(path); // 3 moves

// Same position
path = knightMoves([4, 4], [4, 4]);
printPath(path); // 0 moves
```

## Running the Code

```bash
node knight.js
```

The included example finds the path from `[2, 0]` to `[7, 6]` and displays the result.

## Algorithm Complexity

- **Time Complexity**: O(N) where N is the number of squares on the board (64 for chess)
- **Space Complexity**: O(N) for the queue and visited set
- **Guaranteed**: Always finds the shortest path due to BFS nature

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.