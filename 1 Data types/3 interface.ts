// interface--> helps in defining the structure of an object i.e., it tells typescript what properties an object should have and their types.
interface User {
    id: number;
    name: string;
    email: string;
}
const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};


//type-->it similar to interface but it can also be used to define union types, intersection types, and more complex types.
type UserType = {
    id: number;
    name: string;
    email: string;
};
const user2: UserType = {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com"
};

//using type for union type
type Status = "active" | "inactive" | "pending";
const userStatus: Status = "active"; // valid  
