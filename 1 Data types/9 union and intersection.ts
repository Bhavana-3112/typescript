//union-->a variable can be one of multiple types

type status = "pending" | "approved" | "rejected" | "done";

let currentStatus: status;

currentStatus = "approved";  // OK
currentStatus = "pending";   // OK
currentStatus = "done";      // ❌ Error → only pending/approved/rejected allowed


//intersection-->a variable must satisfy multiple types at the same time


type Admin = { role: string };
type emp = { 
    name: string 
};

type AdminEmployee = Admin & emp;

const admin: AdminEmployee = {
  role: "Manager",
  name: "Nagendra"
};
