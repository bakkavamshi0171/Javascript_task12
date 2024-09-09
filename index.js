// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.

// Example:
const obj = { 
    a: 1, 
    b: 2,
    c: 3, 
    d: 4 
};

for (let key in obj){
    if(obj[key]>2){
        console.log(key, obj[key])
    }
}

// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
const obj1 = { a: 1, b: 2,};
const obj2 = {c:3,d:4}
let x = Object.assign(obj, obj2);
console.log(x)

// 3:
// Use Array.reduce() to sum up the values of an object's properties.
// Example:
const obj = { a: 1, b: 2, c: 3, d: 4 };
const obj3 = { 
    a: 1, 
    b: 2,
    c: 3, 
    d: 4,
};

txt =[];
for (let i in obj3){
    txt.push(obj3[i]);
}
let sum = txt.reduce((total , value)=>{
    return total + value
});
console.log(sum);

// 4. scenario explained for array of objects using hasownproperty.

let obj4 = [ 
    {
        name:"vamhsi",
        age: 23,
        country : "india"
    },
    {
        name:"Ram",
        age: 25,
        city: "hyderabad"
    },
    { 
        name:"Krishna",
        age: 24,
        country : "india"
    },
    {
        name:"steve",
        age: 28,
        country : "USA"
    },
    {
        name:"meher",
        age: 28,
        city : "Spain"
    },
]

let y = obj4.map( ( ele )=>{
    if(!ele.hasOwnProperty("country")){
        obj5 = {
            country : "india"
        };
         return Object.assign( ele , obj5);
    }
});
console.log(y)


Create Method
let obj6 = {
    a:1,
    b:2,
    c:3,
    d:4
}
let obj7 = Object.create(obj6);
console.log(Object.getPrototypeOf(obj7)); //here , In Create method can't access values directly but with the help of getPrototypeOf we can access inherited elements

