// Day 17 Challenge: Start Coding! 🚀
// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
console.log(" \n \t Day 17 Challenge. \n \n Question # 49 \n");
function multipleHobbies(...hobbies) {
    hobbies.forEach(abc => console.log(`i enjoy ${abc}\n`));
}
multipleHobbies("cycling", "cooking");
multipleHobbies("reading books", "shopping", "baking");
console.log("\t\tBY USING ARROW FUNCTIONS\n");
let multiHobbies = (...hobbies) => hobbies.forEach(abc => console.log(`i enjoy ${abc}\n`));
multiHobbies("cooking");
multiHobbies("surfing", "driving");
multiHobbies("cooking", "travelling", "cycling");
//Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
console.log("\t\t QUESTION # 50\n");
console.log(` I am Samreen Saif.
 Today is my ideal day.
 As I learn 3 different things in TypesScript today.
 1. Rest Parameters,
 2. Arrow Functions and
 3. Template Literals.

                Thanks to Aasharib Ali`);
// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
console.log("\n\t\t QUESTION # 51\n");
let areaRectangle = (length, breath) => {
    let area = length * breath;
    console.log(`Area of a REctangle whose length is ${length}cm and breath is ${breath}cm is ${area}cm.`);
};
areaRectangle(5, 8);
areaRectangle(22, 10);
export {};
