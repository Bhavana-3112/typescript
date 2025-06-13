// readonly property-->means it can only be read, not written to
interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = {
    x: 10,
    y: 20
};

// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property
console.log(point.x); // 10
console.log(point.y); // 20
// point.y = 40; // Error: Cannot assign to 'y' because it is a read-only property
// point = { x: 30, y: 40 }; // Error: Cannot assign to 'point' because it is a read-only property