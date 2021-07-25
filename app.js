/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const passwordGenerator = {
    smallLetters : 0,
    capitalLetters : 0,
    symbols : 0,
    generatePassword(){
        console.log(this.capitalLetters)
    }
}


readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    passwordGenerator.generatePassword();
    readline.close();
});

*/

const randomPassword = {
  capitalLetters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  smallLetters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  password: [],
  specialCharacters: ["@", "%", "+", "\\", "/", "#", "$", "?"],
  generatePassword(caps, smalls, symbols, numbers) {
    caps = caps == "" ? 2 : caps;
    smalls = smalls == "" ? 3 : smalls;
    symbols = symbols == "" ? 1 : symbols;
    numbers = numbers == "" ? 2 : numbers;
    this.password = [];
    // console.log("Password YAY!!!" + caps + smalls + symbols);
    for (i = 0; i < caps; i++) {
      this.password.push(this.capitalLetters[Math.floor(Math.random() * 26)]);
    }
    for (i = 0; i < smalls; i++) {
      this.password.push(this.smallLetters[Math.floor(Math.random() * 26)]);
    }
    for (i = 0; i < symbols; i++) {
      this.password.push(
        this.specialCharacters[
          Math.floor(Math.random() * this.specialCharacters.length)
        ]
      );
    }
    for (i = 0; i < numbers; i++) {
      this.password.push(this.numbers[Math.floor(Math.random() * 10)]);
    }
    this.password = this.password.sort(() => Math.random() - 0.5);
    // console.log(this.password);
    return this.password.join("");
  },
};

const btnGenerate = document.querySelector(".btn-generate");
const yourPassword = document.getElementById("yourPassword");
const blah = document.querySelector(".blah");

btnGenerate.addEventListener("click", function () {
  const capital = document.getElementById("capital").value;
  const small = document.getElementById("small").value;
  const specialChar = document.getElementById("specialChar").value;
  const numbers = document.getElementById("numbers").value;
  //   console.log(capital, specialChar, small);
  const password = randomPassword.generatePassword(
    capital,
    small,
    specialChar,
    numbers
  );
  console.log(password);
  yourPassword.textContent = password;
  // blah.innerHTML = password;
});
