// const sayı =[4,2,34,4,1,12,1,4];
// sayı.sort(function(a,b){return a-b});
 
// console.log(sayı);
// console.log(sayı.length);
// a=sayı.includes('')
// console.log(a);
// //  for(let i=0,i<sayı.length,i++){

// //  }

// const arr1 = [4, 2, 34, 4, 1, 12, 1, 4];
// const sonuc = [];

// function findDup(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     let deleted = arr.pop();
//     if (arr.includes(deleted) && !sonuc.includes(deleted)) {
//       sonuc.push(deleted);
//     }
//   }
//   return sonuc;
// }

// console.log(findDup(arr1));





 
 
const array = [4, 4, 32, 69, 8, `angular`, `angular`, `react`, 4.5, 9, 2.1, 2.1, `oops`];
const duplicatedElements = [];
let findDup = function () {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let newArr = new Array;
        newArr = array.slice(i+1,array );
        console.log(newArr);
        if (newArr.includes(element)) {
            duplicatedElements.push(element);
        }
    }
    return duplicatedElements;
}
findDup();
console.log(duplicatedElements);