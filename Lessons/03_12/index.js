// function foo() {//declaration
//     console.log(10+10)
// }

// foo();
// foo();
// foo();

// var boo = function() {//expression
//     console.log(20+20)
// }
// boo();

// function foo() {//declaration
//     console.log(arguments)
// }

// foo(10,20);

// function foo(x,y) {//declaration
//     console.log(x+y)
// }

// foo(10,20);

// console.log(x);
// const x = 10;

// const str1 = "react";
// const str2 = "redux";
// let commonCount = 0; 
// let checkedChars = '';

// function chechChars(str1,str2) {
//     let count = 0;

//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         if (str2.includes(char)) {
//             count++;
//         }
    
//         console.log(char)
//     }
//     console.log(count)
// }

// chechChars('react','redux');
// chechChars('javascript','react');

const employees = [
    { firstName: 'Karen', lastName: 'Sargsyan', department: 'HR', salary: 2000000 },
    { firstName: 'John', lastName: 'Gasparyan', department: 'IT', salary: 1500000 },
    { firstName: 'Margarita', lastName: 'Hovsepyan', department: 'HR', salary: 1500000 },
    { firstName: "Aram", lastName: 'Manukyan', department: 'Finance', salary: 1500000 },
    { firstName: "Nina", lastName: 'Grigoryan',  department: 'IT', salary: 5000000 }
];

// const selectData = {
//     { fullName: 'Karen Sargsyan', department: 'HR' },
// }

function transformUserData (data = []) {
    // if (data === undefined) {
    //     data = []
    // }
    const result = [];
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])
        let item = data[i];
        result.push({
            fullName: `${item.firstName} ${item.lastName}`,
            department:item.department,
            salary:item.salary
        })
    }
    console.log(result)
}
transformUserData(employees);//employees




