// const person = {
//     name: 'beqa'  
// }
// console.log(person['name']) (person.name)

// const peron = {}
// personalbar.name = 'beqa' (igivea rac wina magaliti.beqas gamoitans)


// const person = {}

//  Object.defineProperty(person, 'name', {
//      value: 'tiko',
//      writable: false,
//      configurable:false
//  })

//  person.name ="new value"
//  console.log(person)

// spread operators
// let x = [1,2,3]
// let y = [6,5,7,]
// let z = [...x, ...y]
// console.log(z)

// let x = {name: 'test', lastName:'test2'}
// let y = {name1: 'tiko', lastName1:'gogiladze'}
// let z = {...x, ...y}
// console.log(z)

// let k = {
//     person :{
//         firstname: {
//             value :'beqa'
//         }
//     }
// }

// console.log (k.person.firstname.value)


// let x = {
//     name: 'tiko'
// }
// Object.seal(x)
// x.name = "tiko";
// console.log(x)

// Object.freeze(x)
// Object.seal(x)

// let x = {
//     value: 'tiko',
//      writable: false,
//      configurable:false
// }
// Object.freeze(x)
// x.name = "beqa"
// console.log(x)


// FUNCTIONS



// function sumAndDivideByfive(a,b) {
//     if(typeof a === 'number'  && typeof b === 'number') {
//         return (a + b) / 5;
//     }else {
//         throw new Error('unexpected type')
//     }
// }

// let x = sumAndDivideByfive(50,100);
// console.log(x)


// let print = function(msg) {
//     console.log(msg)
// }

// function print (msg) {
//     console.log(msg)
// }

// print("tiko")

// davaleba#1
// let objects = [
//     {
//         id:1,
//         name:'name'
//     },
//     {
//         id:2,
//         name:'name'
//     },
//     {
//         id:3,
//         name:'name'
//     },
//     {
//         id:4,
//         name:'name'
//     },
//     {
//         id:5,
//         name:'name'
//     },
//     {
//         id:6,
//         name:'name'
//     }
// ]

// console.log(objects.filter(obj => obj.id>4));
// console.log(objects.filter(obj => obj.id>4).map(obj => obj.id));
// davaleba#2

// let a = {
//     id:1,
//     name:'name'
// }
// Object.seal(a)
// a.id = 2;
// a.name = 'tiko'
// console.log(a)

// let b = {
//     id:1,
//     name:'name'
// }

// Object.freeze(b)
// b.id = 3;
// b.name = 'tiko'
// console.log(b)


// function evenNumbers(n) {
//     console.log(n);
//     let newEvenNumber = n / 2;
//     if (newEvenNumber >= 2) {
//         evenNumbers(newEvenNumber);
//     } 
// }

// evenNumbers(100)



//   function numbers(n) {
//     if (n > 100) {
//       return;
//     }
//     if (n % 2 === 0) {
//       console.log(n);
//     }
//     numbers(n + 1);
//   }
  
//   numbers(1);


// loops

// for  (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// let arr = [1,2,3,4,5,67,85,99];
// for ( let i = 0; i <= arr.length; i++) {
//     console.log(i, arr[i])
// }

// 16 leqcia

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let arr = [4,5,6,7,100];
// for (let i = 0;i <arr.length;i++) {
//     console.log(i,arr[i])
// }


// let i = 0;
// let arr = [4,5,6,7,100];
// while (i < arr.lenght) {
//     console.log(i,arr[i])
//     i+=2;
// }


// while (true) {
//     console.log('true')
// }  ===> usasrulo while

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while (i < 10);

// for (let i =0; i <100; i++) {
//     if (i > 50) {
//         break;
//     }
//     console.log(i);
// }

// for (let i =0; i <100; i++) {
//         if (i % 2 == 0) {
//             continue;
//         }
//         console.log(i);
//     }


// let arr = ['tiko', '1234','sdsd','gogiladze'];
// for (let i=0; i < arr.length; i++) {
//     for (let j =0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }


// let person =  {name:'tiko', lastName: 'gogiladze'}
// for (let s in person) {
//     console.log(s, person[s])
// }


// let arr =  ['tiko', 'true', 'gogiladze'];
// arr.forEach(s => {
//     console.log(s)
// })

// let func =(...args) => {
//     console.log(args)
// }

// func(1,2,3,4)


// let obj = {
//     name:'test',
//     func: function(...args) {
//         console.log(args);

//     }
// }

// obj.func(1,2,3,4,5)


// let obj1 = {name:'name'};
// let obj2 = {lastname:'lastaneme', __proto__:obj1}
// console.log(obj2.name)


// function Square (x, y) {
//     this.x = x;
//     this.y = y;
// }

// let square = new Square(4,5)
// console.log(square)



// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let arr = [2,3,4,510];
// for (i= 0; i < arr.length; i++) {
//     console.log(i, arr[i])
// }


// for (let i = 0; i <100; i++) {
//     if (i > 50) {
//         break;
//     }
//     console.log(i);
// }

// let arr = ['tiko', 'gogiladze', '1234'];
// let str = 'string';
// for (let i = 0; i < arr.length; i++) {
//     for (let j =0; j <arr[i].length;j++) {
//         console.log(arr[i][j])
//     }

// }

// davaleba #4
// let arr ={name:'tiko', lastName:'gogiladze'}
// for (let s in arr) {
//     console.log(s, arr[s])
// }

// let arr = ['tiko','gogiladze'];
// arr.forEach (s => {
//     console.log(s)
// })

// let func = (...args) => {
//     console.log(args)
// }

// func( 'tiko')


// let obj = {
//     name:'test',
//     func: function(...args) {
//         console.log(args);
//     }

// }

// obj.func(1,2,3);



// davaleba#3
// const obj1 = {
//     name:'name'
// }


// const obj2 = {
//     lastName: 'lastname',
//     __proto__:obj1
// }


// console.log(obj2.name)


// function Square (x,y) {
//     this.x=x;
//     this.y=y;
// }

// let square = new Square (4,5)
// console.log(square)

// const obj = {
//     func: function() {
//         console.log('my func')
//     }
// }

// const childObj = Object.create(obj,{name: {value: 1}})

// childObj.func


// const obj = {}
// Object.assign(obj, {
//     name: 1,
//     lastName:2
// },
// {
//     name:2,
//     lastName:3
// }


// )

// console.log(obj.name)


// const obj = {}
// const obj1 = {
//     a: null,
//     b:1
// }

// Object.defineProperty(obj1, 'b', {
//     writable:false
// })

// Object.assign(obj, obj1)
// console.log(obj)


// let obj = {name:1,f:2}
// const json =JSON.stringify(obj);

// const parsedJson =JSON.parse(json);
// console.log(parsedJson);
// console.log(parsedJson.name)

// davaleba #5
let matrix1 =[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let matrix2 = [[13,14,15,16],[17,18,19,20],[21,22,23,24]]
