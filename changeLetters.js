//function, which changes upper-case letters to lower-case letters and vice versa

function changeLetters(str) {
  let tekst = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      tekst[i] = str[i].toUpperCase();
    }
    else {
      tekst[i] = str[i].toLowerCase();
    }
  }
  tekst = tekst.join("");
  return tekst;
}
console.log(changeLetters("ChaNgE mE PleAsE"));
