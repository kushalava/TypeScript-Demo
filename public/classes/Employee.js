// class Employee implements ISummary {
//     // Properties 
//     department: string
//     name: string
//     age: number
//     isHead: boolean
//     email: string
//     // Constructor
//     constructor(department: string, name: string, age: number, isHead: boolean, email: string) {
//         this.department = department
//         this.name = name
//         this.age = age
//         this.isHead = isHead
//         this.email = email
//     }
//     // Methods
//     summary(): string {
//         if (this.isHead) {
//             return `${this.name} leads ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
//         } else {
//             return `${this.name} works into ${this.department} department and is ${this.age} years old. (Email - ${this.email})`
//         }
//     }
// }
export class Employee {
    // Constructor - Shorthand
    constructor(department, name, age, isHead, email) {
        this.department = department;
        this.name = name;
        this.age = age;
        this.isHead = isHead;
        this.email = email;
    }
    // Methods
    summary() {
        if (this.isHead) {
            return `${this.name} leads ${this.department} department and is ${this.age} years old. (Email - ${this.email})`;
        }
        else {
            return `${this.name} works into ${this.department} department and is ${this.age} years old. (Email - ${this.email})`;
        }
    }
}