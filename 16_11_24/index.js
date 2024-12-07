//1
// Write a program that takes the user’s score and prints the corresponding grade based on the following rules:
// 90-100 = “A”
// 80-89 = “B”
// 70-79 = “C”
// 60-69 = “D”
// 0-59 = “F”
// Goal
// Use multiple if-else if statements.

// let usersScore = +prompt("Enter the user's score");

// if (usersScore >= 90 && usersScore <= 100) {
//     console.log("User's grade =", 'A');
// } else if (usersScore >= 80 && usersScore <= 89) {
//     console.log("User's grade =", 'B');
// } else if (usersScore >= 70 && usersScore <= 79) {
//     console.log("User's grade =", 'C');
// } else if (usersScore >= 60 && usersScore <= 69) {
//     console.log("User's grade =", 'D');
// } else if (usersScore >= 0 && usersScore <= 59) {
//     console.log("User's grade =", 'F');
// } else {//usersScore < 0 || usersScore > 100
//     console.log("Enter numbers between 0 and 100.");
// }

//2
// Write a program that takes a number as input and checks if it is even or odd:
// If the number is even, print “The number is even.”
// If the number is odd, print “The number is odd.”
// Use and learn modulo operator %

// let num = +prompt("Enter the number");

// if (num <= 0) {
//     console.log("Enter the number greater than 0.");
// } else if (num % 2 == 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

//3
// Month Check
// Write a program that takes the number of a month (1-12) and prints which season it belongs to:
// 12, 1, 2 -> “Winter”
// 3, 4, 5 -> “Spring”
// 6, 7, 8 -> “Summer”
// 9, 10, 11 -> “Autumn”

// let num = +prompt("Enter the number between 1 and 12.");

// if (num == 1 || num == 2 || num == 12) {
//     console.log("Winter");
// } else if (num >= 3 && num <= 5) {
//     console.log("Spring");
// } else if (num >= 6 && num <= 8) {
//     console.log("Summer");
// } else if (num >= 9 && num <= 11) {
//     console.log("Autumn");
// } else {
//     console.log("Enter the number between 1 and 12.");
// }

//4
// Day Translation
//Create a program that uses a switch-case to translate a day of the week from English to Armenian. 
//The user should input the name of the day in English, and the program should return the corresponding 
//Armenian name.
// Input: “Monday”
// Output: “Երկուշաբթի”


// let weekDay = prompt("Enter a day of the week.");

// switch (weekDay) {
//     case "Monday":
//         console.log("Երկուշաբթի");
//         break;
//     case "Tuesday":
//         console.log("Երեքշաբթի");
//         break;
//     case "Wednesday":
//         console.log("Չորեքշաբթի");
//         break;
//     case "Thursday":
//         console.log("Հինգշաբթի");
//         break;
//     case "Friday":
//         console.log("Ուրբաթ");
//         break;
//     case "Saturday":
//         console.log("Շաբաթ");
//         break;
//     case "Sunday":
//         console.log("Կիրակի");
//         break;
//     default:
//         console.log("Wrong right weekday.");
// }

// if (weekDay == "Monday") {
//     console.log("Երկուշաբթի");
// } else if (weekDay == "Tuesday") {
//     console.log("Երեքշաբթի");
// } else if (weekDay == "Wednesday") {
//     console.log("Չորեքշաբթի");
// } else if (weekDay == "Thursday") {
//     console.log("Հինգշաբթի");
// } else if (weekDay == "Friday") {
//     console.log("Ուրբաթ");
// } else if (weekDay == "Saturday") {
//     console.log("Շաբաթ");
// } else if (weekDay == "Sunday") {
//     console.log("Կիրակի");
// } else {
//     console.log("Wrong right weekday.");
// }

//5
// Calculator
// The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). 
// Use switch-case
// Input: 5, 3, "+"Output: 8

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// if (num1 != 0 && num2 != 0) {
//     var operation = prompt("Choose the operation (+, -, *, /):");
//     let output;

//     switch (operation) {
//         case '+':
//             output = num1 + num2;
//             console.log("Output =", output);
//             break;
//         case '-':
//             output = num1 - num2;
//             console.log("Output =", output);
//             break;
//         case '*':
//             output = num1 * num2;
//             console.log("Output =", output);
//             break;
//         case '/':
//             output = num1 / num2;
//             console.log("Output =", output);
//             break;
//         default:
//             console.log("Choose the operation (+, -, *, /).");
//     }
// } else{
//     console.log("Enter only numbers (between 0).");
// }



