// ERRORS

// console.log('234')
// throw new Error('warning')
// console.log('sss');


// throw new SyntaxError ('warning')
// console.log('text is not right')

// try {
//    throw new Error('error message')
// } catch(err){
//     console.log('error occured')
// }

// try {
//    throw new SyntaxError('error message')
// } catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }


// try {
//     console.log('in try block')
//    throw new Error('error message')
// } catch(err){
//     console.log('in catch block')
//     console.log(err.message)
// }finally {
//     console.log('in finally block')
// }


// STRING MANIPULATION

// let s = 'Hello';
// console.log(s.length);


// let s = 'Hello';
// console.log(s[3]);

// let s = 'Hello';
// console.log(s[s.length -1])

// let s = 'Hello';
// const lastIndex = s.length - 1;
// console.log(s.charAt(lastIndex))


// let s = 'Hello';
// console.log(s.toUpperCase())


// let s = 'Hello';
// console.log(s.indexOf('l'))

// let s = 'Hello World';
// console.log(s.substring(2, 6)); (chris rasac mivutitebt imas)


// let s = 'Hello World';
// console.log(s.split('o'))

// let s = 'Hello World';
// const arr = s.split(' ');
// console.log(arr.join(' * '))


// let s = 'Hello World';
// const sunstring1 = s.slice(1, 3);
// console.log(s)
// console.log(sunstring1)


// let s = '    Hello World    ';
// console.log(s.trim());
// console.log(s.trim().length) (ramdenia stringis zoma spacebis gareshe)

// const s = String.fromCharCode(70);
// console.log(s)   (ascii table-dan shegvidzlia gavigot romeli simboloa)



// ARRAYS

// let arr = [1, 2, 3, 'string', true];
// console.log(arr[arr.length -1]);

// let arr = new Array(1,2,3,)
// console.log(arr) (igivea rac wina magaliti)


// let arr = new Array (3)
// console.log(arr.length) (am shemtxvevashi 3 elementi maisivia)


// let arr = [1, 2, 3, 'string', true];
// arr [0] =5;
// console.log(arr); (anu 5ma chaanacvla 0 indexze myopi elementi)


// let arr = [1, 2, 3, 'string', true];
// console.log(Array.isArray(arr)) (amowmebs aris tu ara array)


// let arr = [1];
// let arr1 = [1];
// console.log(arr == arr1);
// console.log(arr === arr1);(orive false iqneba,radgan array araprimitiuli tipebia da memoryshi calcalke adgili aqvs gamoyopili)


// shegvidzlia shedareba gavaketot wina magalitis

// let arr = [1];
// let arr1 = [1];
// console.log(arr.join('') === arr1.join(''))

// let arr = Array.of([1,2,3], true, 'string'); 
// console.log(arr[0]);
// console.log(arr[0][1]);

// let arr = Array.of([1,2,3], true, 'string');
// console.log(arr.flat()) (flat aertianebs masivebs da xdis ertganzomilebians)

// let arr = Array.from('string')
// console.log(arr) (array.from bechdavs characterebis strings.satitao asos dabechdavs)


// let arr = 'string'.split('r')
// console.log(arr)
// console.log((arr.join(''))) (join ubralod sheaertebs rac darcha)


// let arr = [1,2,3,4,5];
// const x = arr.filter((a) =>{
//     return a > 3;
// })
// console.log(x)


// let arr = [1,2,3,4,5];
// const x = arr.map((a) =>{
//     return a + '';
// })
// console.log(x) (string gaxdeba)

// let arr = [1,2,3,4,5]
// let a = arr.reduce((c, p) =>{
//     return c+p;
// })
// console.log(a) (sheajamebs)

// let arr = ['a','b', 'c'];
// let a = arr.reduceRight((c,p) =>{
//     return c+p;
// })
// console.log(a) (reduceright ukugma dabechdavs)

// let arr = [1,2,3,4,5];
// const last = arr.pop();
// console.log(last)
// console.log(arr)  (pop agdebs bolo elements)

// let arr = [1,2,3,4,5];
// let first = arr.shift();
// console.log(first);
// console.log(arr) (shifti agdebs pirvel elements)

// arr.push(56) (boloshi daamatebs 56)
// arr.unshift(56) (amatebs tavshi)
// arr.reverse (1,2,3,4) (amoatrialebs da iqneba 4,3,2,1)
// arr.sort (dasortavs arays zrdadobis mixedvit)

// gansxvaveba splice da slice shoris: splice original masivs cvlis xolo slice ara






