// let record = [];

// const viewTask = () => {
//     let tbl = "";
//     record.forEach((val) => {
//         tbl += `
//             <tr>
//                 <td>${val.Name}</td>
//                 <td>${val.Age}</td>
//                 <td>${val.Country}</td>
//             </tr>
//         `;
//     });
//     document.getElementById('recorded').innerHTML = tbl;
// };

// const addTask = () => {
//     let name = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     let country = document.getElementById('country').value;

//     if (!name || !age || !country) {
//         alert("Please fill in all fields");
//         return;  
//     }
//     let obj = {
//         Name: name,
//         Age: age,
//         Country: country
//     }; 
//     record.push(obj);    
//     document.getElementById('name').value = "";
//     document.getElementById('age').value = "";
//     document.getElementById('country').value = "";

//     viewTask();
// };


// class Person {
//     constructor(name, age, country) {
//         this.Name = name;
//         this.Age = age;
//         this.Country = country;
//     }    
// }
    
    
class person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.Country = country;
    }
    details() {
        console.log(`Name :- ${this.name}`);
        console.log(`Age :- ${this.age}`);
        console.log(`Country :- ${this.Country}`);
    }
}

let p1 = new person("Drashti", 21, "Switzerland");
let p2 = new person("Abhay", 19, "US")
let p3 = new person("Nirbhay", 25, "Australia")
let p4 = new person("Payal", 29, "America")
let p5 = new person("Vedant", 22, "Canada")
let p6 = new person("Tirth", 17, "Russia")

let arr = [p1, p2, p3,p4, p5];
let i = 1;

arr.map((val) => {
    console.log(`\n\n`);
    console.log(`-: Details :-`);
    val.details();
    i++;
    console.log(`\n\n`);
  
    
})


