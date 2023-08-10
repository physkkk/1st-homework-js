
//Explicit-let
const my_name="aljawharah alanazi";

console.log(my_name)

//Implicit-let
let my_birthday;
my_birthday=11;

console.log(my_birthday)

//VAR

var my="hi";

var my="hello";



//DATA TYPES - LET - CONST - CONSOLE


//Pirmitive
//boolean

let text1 = false;

const text2 = true;

console.log(text1);
console.log(text2);
console.log(typeof(text1));

//symbol

let sym=Symbol('hi');

console.log(sym);
console.log(typeof(sym));


//null

let n=null;

console.log(n);
console.log(typeof(n));

//undefined

let un;

console.log(un);

//number
let number=100;

console.log(number);
console.log(typeof(number))

//double

let x=12.1;

console.log(x);
console.log(typeof(x));


//bigint

const x1=10000n;

console.log(x1);
console.log(typeof(x1));

//string

let text="hello";
console.log(text);
console.log(typeof text);


//NON Primitive

//Objects

let testobject={

    num:40,
    str:"test",
    bool:false

}

console.log(typeof testobject);
console.log(testobject.str);
console.log(testobject.bool);
console.log(testobject.num);

//scope
{
    let name1;
    name1="Aljawharah";
    console.log(name1);
}
//DONE BY ALJAWHARAH