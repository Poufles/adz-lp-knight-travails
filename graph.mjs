/**
 * Creates a node/vertex for the graph.
 * @param {Array} value 
 */
function Node(value) {
    let root = value, next = [];

    return { root, next };
};

/**
 * A simple graph function to store vertices.
 * @param {Array} rootValue 
 */
export default function Graph(rootValue) {
    const root = Node(rootValue); // Instantiate a root node/vertex

    return {
        /**
         * Inserts a new vertex in the graph
         * @param {Array} value The value to be inserted
         * @param {Array} after The vertex to where the new vertex must be inserted
         */
        insert: (value, after) => {
            const node = Node(value);
            
            // Check if root branches are empty.
            if (root.next.length === 0) {
                root.next.push(node);
                return;
            };
            
            // Checks if the given after argument doesn't exist
            if (!InsertVertex(root, node, after)) root.next.push(node);
        },
        /**
         * Retrieves the whole branch of the given value
         * @param {Array} value The vertex to find the branch of
         * @returns An array of branches
         */
        branchOf: (value) => {
            const arrBranch = [];

            BranchVertex(root, value, arrBranch);

            return arrBranch
        }
    };
};

function InsertVertex(node, newNode, after) {
    let isSuccess = false;

    // If after doesn't exist return false
    if (!node) return isSuccess;

    // This is the opposite of the above
    if (String(node.root) === String(after)) {
        node.next.push(newNode);
        return true;
    };

    // Reiterate over each branch of the graph
    for (let index = 0; index < node.next.length; index++) {
        isSuccess = InsertVertex(node.next[index], newNode, after); 
        if (isSuccess) break;
    };

    return isSuccess;
};

function BranchVertex(node, value, arr) {
    if (!node) return;

    // Check if the root is the given value
    if (String(node.root) === String(value)) {
        arr.unshift(node.root);
        return true;
    };

    // Reiterate over each branch of the graph
    for (let index = 0; index < node.next.length; index++) {
        // Check the possible branch of the given value 
        if (BranchVertex(node.next[index], value, arr)) {
            arr.unshift(node.root);
            return true;
        }; 
    };

};