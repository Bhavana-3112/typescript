//object types-->these are used to define the shape of an object
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};

// we can also use an interface to define the shape of an object
interface Product {
    id: number;
    name: string;
    price: number;
}

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 1000
};
