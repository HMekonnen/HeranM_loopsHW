//#1 Switch
let num= Math.floor(Math.random()*5+1);
switch(num)
{
case 0:
    console.log("The first recorded zero appeared in Mesopotamia around 3 B.C")
    break;

    case 1:
        console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an “aggregate of units”, so numbers began at Two. ")
        break;
        
case 2:
    console.log("An interesting fact")
    break;
    
case 3:
    console.log("We live on the 3rd planet from the sun.")
    break;
    
    default:
    console.log("larger than 4")
    break;
    

}
// #2 Switch
let birthday= new Date ('June 10, 1990')
let month = birthday.getMonth()
switch(month)
{
case 0:
    console.log("January")
    break;

    case 1:
        console.log("February")
        break;
        
case 2:
    console.log("March")
    break;
    
case 3:
    console.log("April")
    break;
    
    default:
    console.log("May-December")
    break;
    

}

// #1 Ternary Operators
let person = {
    name: 'tony',
    age: 20,
    driver: null
    };

    person.driver = (person.age >= 16) ? 
    'Yes': 'No';
    
    console.log(person.driver)

    //#2 Ternary Operators

    let age = 7;
    let kindergarten_eligible =
    (age > 5)? "Old enough": "Too young"
console.log(kindergarten_eligible)
