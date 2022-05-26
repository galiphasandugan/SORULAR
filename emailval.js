// ! Write a function that takes email variable and return true or false and write console invalid or valid.

// ! Please note that, extension length can be 2 or 3 letters( For example: .co, com. )

// let kAdı = prompt('Email adresini giriniz: ');
// const result= kAdı.includes('@');
// const result2 = (kAdı.length - kAdı.indexOf(".")-1)<=3;
// console.log(result&&result2);

// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.
// Write a function that takes email variable and return true or false and write console invalid or valid.
// Please note that, extension length can be 2 or 3 letters( For example: .co, com. )
// Pseudocode:
// hepsi string olmalı
// includes veya startsWith@ olmalı
// if ext > 3 --> false olmalı

// faall


// const mail = "rustuketn@gmail.com";
// function validEmail(mail){


// let splitMail = mail.split("@");
// let username = splitMail[0];
// let last = splitMail[1].split(".");
// let webname = last[0];
// let extension = last[1];
// console.log(username);
// console.log(extension);
// console.log(webname);
// return (mail.includes('@')&& username.length > 0 && webname.length>0 && (extension.length==2|| extension.length==3));
// }
// console.log(validEmail(mail));


// if (mail.includes("@")) {
//   let splitMail = mail.split("@");
//   let username = splitMail[0];
//   let last = splitMail[1].split(".");
//   let webname = last[0];
//   let extension = last[1];
//   console.log(username);
//   console.log(extension);
//   console.log(webname);
//   if (
//     username.length > 0 &&
//     webname.length > 0 &&
//     extension.length > 1 &&
//     extension.length < 4
//   ) {
//     console.log("Valid Mail Adress");
//   } else {
//     console.log("Invalid Mail Adress");
//   }
// } else {
//   console.log("Invalid Mail Adress");
// }





// let mail1 = `davidmoses`;
// let mail2 = `@gmail`;
// let mail3 = `.com`;

// let userName = function () {
//   if (mail1.length != 0 || mail2.includes(`@`)) {
//     return mail1;
//   } else {
//     return `pls, enter a valid username`;
//   }
// };
// let websiteName = function () {
//   if (mail2.startsWith(`@`)) {
//     return mail2;
//   } else {
//     return `pls, enter a valid mailname`;
//   }
// };
// let ext = function () {
//   if (mail3.length < 5 && mail3.startsWith(`.`)) {
//     return mail3;
//   } else {
//     return `pls, enter a valid extension`;
//   }
// };

// console.log(userName());
// console.log(websiteName());
// console.log(ext());

// const isValidMail = userName().concat(websiteName(), ext());

// console.log(isValidMail);

const mail = "@t.com";
function validMail(mail) {
  if (mail.includes("@")) {
    let splitMail = mail.split("@");
    let username = splitMail[0];
    let last = splitMail[1].split(".");
    let webname = last[0];
    let extension = last[1];
    return (
      username.length > 0 &&
      webname.length > 0 &&
      (extension.length == 3 || extension.length == 2)
    );
  } else {
    return "false";
  }
}
console.log(validMail(mail));