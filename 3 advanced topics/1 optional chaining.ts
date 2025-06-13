// 1️⃣ Define types
interface ContactInfo {
  phone?: string;
  email?: string;
}

interface Employee {
  name: string;
  role?: string;
  contact?: ContactInfo | null;
}

// 2️⃣ Sample data
const employee1: Employee = {
  name: "Kookie",
  role: "Developer",
  contact: {
    phone: "9876543210",
    email: "kookie@example.com"
  }
};

const employee2: Employee = {
  name: "Guest"
};

//optional chaining-->Used when you're not sure if a property exists.
//  It prevents errors if something is null or undefined.

function getPhone(emp: Employee): string | undefined {
  return emp.contact?.phone;
}

console.log(getPhone(employee1)); // "9876543210"
console.log(getPhone(employee2)); // undefined


//  Example with nullish coalescing
//nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined.
function getRole(emp: Employee): string {
  return emp.role ?? "Intern";
}

console.log(getRole(employee1)); // "Developer"
console.log(getRole(employee2)); // "Intern"


//MANNUAL NULL CHECKING-->we can check mannually
function printEmail(emp: Employee): void {
  if (emp.contact && emp.contact.email) {
    console.log(`Email: ${emp.contact.email}`);
  } else {
    console.log("Email not available.");
  }
}

printEmail(employee1); // "Email: kookie@example.com"
printEmail(employee2); // "Email not available."

// COMBINED example-->You safely access a nested property (using ?.) and give a default value (using ??) when the value is undefined or null.

function getContactSummary(emp: Employee): string {
  const phone = emp.contact?.phone ?? "No Phone";
  const email = emp.contact?.email ?? "No Email";
  return `Phone: ${phone}, Email: ${email}`;
}

console.log(getContactSummary(employee1)); // Phone: 9876543210, Email: kookie@example.com
console.log(getContactSummary(employee2)); // Phone: No Phone, Email: No Email
