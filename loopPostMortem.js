const productNames = ["Laptop", 'Mobile', 'Tv', 'Dekstop', 'I Pad', 'apple', 'samsung'];

// const laptop = productNames[0]
// const Tv = productNames[2]
// // console.log(productNames);
// console.log(laptop);
// console.log(Tv);


/**For */

// for ( let i = 0; i < productNames.length; i++){
//     const element = productNames[i];
//     console.log('from only for loop---', element);
// }


/**For of */
// for (const element of productNames) {
//     console.log('from for of---loop',element);
// }


/**Object ke for--in loop kora */

const person = {
    name : 'Farhan Rahman',
    age : 20,
    height : '5',
    address : {
        parmanent : 'Dhaka',
        present : 'Comila'
    },
    face : 'ujjol shamla',
    occupation : 'student'
}

// const name = person['name']
// const age = person['age']
// console.log(name);
// console.log(age);


/**Object ke for--in loop kora */

/**Rule: 01 */

// for (const element in person) {
//     console.log('from for of---loop',element);

//     console.log('value', person[element]);
// }


/**Rule: 02 */

for (const element in person) {
    console.log(element , ':', person[element]);
}