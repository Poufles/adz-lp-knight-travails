/**
 * Creates a horse object 
 */
export default function Horse() {
    const moves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1,], [-2, -1]
    ];

    const tiles = {};
    let currentPos;

    /**
     * Creates possible moves for the horse
     * @param {Number} tileCount Tiles of the board (E.g. 8 = 8x8)
     */
    const possibleMoves = (tileCount) => {
        const movesArr = [];

        for (let move of moves) {
            // Create a new x and y move
            let nextX = currentPos[0] + move[0];
            let nextY = currentPos[1] + move[1];

            // Check if the move is possible in the given tile count / board tiles
            if ((nextX < tileCount && nextX > -1) && (nextY < tileCount && nextY > -1)) {
                movesArr.push([nextX, nextY]);
            };
        };

        return movesArr;
    };

    return {
        get position() { return currentPos },
        set position(newPos) { currentPos = newPos },
        get visitedTiles() { return tiles },
        set visitedTiles(tile) { tiles[tile] = true },
        possibleMoves
    };
};