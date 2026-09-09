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
