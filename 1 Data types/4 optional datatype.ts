//optional datatype (?)-->means it is not mandatory, it may be there or not
interface Employee{
    id: number;
    name: string;
    email?: string; // optional property
    phone?: string; // optional property

}
const employee: Employee = { //it is valid too..
    id: 1,
    name: "John Doe"
};
