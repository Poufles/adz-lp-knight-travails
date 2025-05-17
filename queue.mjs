/**
 * A simple queue function. 
 */
export default function Queue() {
    const fil = [];

    return {
        enqueue: (value) => fil.push(value),
        dequeue: () => fil.shift(),
        hasElements: () => fil.length !== 0 ? true : false
    };
};