// !Write a Python/JavaScript code to sort the list/array below without using .sort() method.
// ! elements!

let liste = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
console.log(as_list.sort (a,b) => a-b );    

console.log(list.length);

let list=[1,2,3];
let i=0
let toplam=[]
while(i<list.length){
    if(list[i]<list[i+1]){
    toplam+=list[i+1]
    console.log(toplam);
    break
}
     else{
         console.log('dur');
}

i++
}

let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
  console.log(text);
}
let list = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] > list[j]) {
      let sorted = list[i];
      list[i] = list[j];
      list[j] = sorted;
    }
  }
}
console.log(list); 

let a = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let b = [];

// ! Second Way:
for (let i = 0; i > a.lenght >= 0; i++) {
  let mini = Math.min(...a);
  b.push(mini);
  a.splice(a.indexOf(mini), 1);
}
console.log(b);

let a = [999, 333, 2, 8982, 12, 45, 77, 99, 11];
let b = [];

// ! Second Way:
for (let i = 0; i > a.lenght >= 0; i++) {
  let mini = Math.min(...a);
  b.push(mini);
  a.splice(a.indexOf(mini), 1);
}
console.log(b);