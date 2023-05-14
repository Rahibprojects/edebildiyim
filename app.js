let a = +prompt("ilk reqemi daxil edin:");
let b = +prompt("ikinci reqemi daxil edin:");
let c = +prompt("uchuncu reqemi daxil edin:");

if (a === b || b === c || a===c) {
  console.log("eyni reqem daxil etmek olmaz");
} else {
  if (a > b) {
    if (a < c) {
      console.log("orta deyerli reqem: " + a);
    } else if (b > c) {
      console.log("orta deyerli reqem: " + b);
    } else {
      console.log("orta deyerli reqem: " + c);
    }
  } else {
    if (a > c) {
      console.log("orta deyerli reqem: " + a);
    } else if (b < c) {
      console.log("orta deyerli reqem: " + b);
    } else {
      console.log("orta deyerli reqem: " + c);
    }
  }
}
