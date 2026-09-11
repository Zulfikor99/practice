console.log("==========TASK F==========");
/*
Yagona string argumentga ega findDoublers nomli function tuzing
Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
true yokida false natija qaytarsin.
*/
function findDoublers(str) {
  x = str.split("").sort();

  for (let i = 0; i < str.length; i++) {
    if (x[i] === x[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(findDoublers("hello"));
console.log(findDoublers("abcdef"));
console.log(findDoublers("aastring"));

console.log("==========TASK E==========");
/*

Shunday function tuzing, u bitta string argumentni qabul qilib
osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh"

*/

function getReverse(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  new_str = arr.join("");
  return new_str;
}
console.log(getReverse("hello"));
console.log(getReverse("MARK"));
console.log(getReverse("JUSTIN"));
