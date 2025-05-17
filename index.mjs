import Graph from "./graph.mjs";
import Horse from "./horse.mjs";
import Queue from "./queue.mjs";

/**
 * Creates the shortest path from a point to another.
 * @param {Array} start 
 * @param {Array} end 
 */
function KnightTravails(start, end) {
    const boardTiles = 8;
    const queue = Queue();
    const horse = Horse();
    const graph = Graph(start);

    queue.enqueue(start);

    while (queue.hasElements()) {
        horse.position = queue.dequeue(); // Defines horse's position

        // Check if horse's position is the endpoint
        if (String(horse.position) === String(end)) break; 

        const moves = horse.possibleMoves(boardTiles); // Create moves for the horse

        for (let move of moves) {
            // Check if the horse has visited the tile
            if (!horse.visitedTiles[move]) {
                horse.visitedTiles = move; // Add move to the visited tiles
                queue.enqueue(move); // Register new move for the horse
                graph.insert(move, horse.position); // Register another vertex to the graph
            };
        };
    };

    // This part is simply for printing the results
    const branch = graph.branchOf(end);
    const stepLength = branch.length; 
    let string = `${branch[0]}`;

    console.log('=====================================');
    console.log(`The chevalier took ${stepLength - 1} steps!`);
    console.log('Here is his path:')
    
    for (let index = 1; index < stepLength; index++) {
        string += ` -> ${branch[index]}`;
    };
    
    console.log(string)
    console.log('=====================================\n\n');
};

KnightTravails([0, 0], [7, 7]);
KnightTravails([3, 3], [0, 0]);