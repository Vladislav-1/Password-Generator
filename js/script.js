/* --- Определяем переменные --- */
const aLineOfPasswordElement = document.querySelector(".aLineOfPassword");
const passwordElement = document.querySelector(".password");
const passwordLengthElement = document.getElementById("passwordLength");
const mainSelectNumberElement = document.getElementById("mainSelectNumber");
const mainSelectLowercaseLettersElement = document.getElementById(
  "mainSelectLowercaseLetters"
);
const mainSelectCapitalLettersElement = document.getElementById(
  "mainSelectCapitalLetters"
);
const mainSelectSymbolsElement = document.getElementById("mainSelectSymbols");
const mainFormButtonElement = document.querySelector(".main__formButton");
/* ----------------------------- */

/* --- Функция генерации пароля--- */
mainFormButtonElement.addEventListener("click", () => {
  let textPassword = []; // создали пустой массив для будущих элементов массива
  let y; // переменная выбора знака
  let randomZ; // переменная наполнения пароля
  /* --- Определяем переменные в функции --- */
  /* --- Массив цифр --- */
  const SelectNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  /* ------------------- */
  /* --- Массив строчных букв --- */
  const SelectLowercaseLetters = [
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
  ];
  /* ---------------------------- */
  /* --- Массив заглавных букв --- */
  const SelectCapitalLetters = [
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
  ];
  /* ----------------------------- */
  /* --- Массив символов --- */
  const SelectSymbols = [
    "&#36;",
    "&#64;",
    "&#35;",
    "&#37;",
    "&#38;",
    "&#94;",
    "&#126;",
    "&#167;",
  ];
  let x = 0;
  while (x < passwordLengthElement.value) {
    if (
      mainSelectNumberElement.value == 1 || // не выбрано значение для цифр
      mainSelectLowercaseLettersElement.value == 1 || // не выбрано значение для строчных букв
      mainSelectCapitalLettersElement.value == 1 || // не выбрано значение для заглавных букв
      mainSelectSymbolsElement.value == 1 // не выбрано значение для символов
    ) {
      aLineOfPasswordElement.innerHTML = `Определите все необходимые параметры!`;
      aLineOfPasswordElement.style =
        "background: rgba(255,255,0,1.0); padding: 3px 7px; width: 100vw; text-align: center; font-size: 16px; font-weight: 600;";
      break;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        continue;
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1) {
        continue;
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2) {
        continue;
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      if (y == 3) {
        continue;
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 1) {
        continue;
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1 || y == 2) {
        continue;
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2 || y == 3) {
        continue;
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 1 || y == 2 || y == 3) {
        continue;
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 2 || y == 3) {
        continue;
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 1 || y == 3) {
        continue;
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 1 || y == 2) {
        continue;
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 2 &&
      mainSelectLowercaseLettersElement.value == 3 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 1 || y == 3) {
        continue;
      }
      if (y == 0) {
        randomZ = SelectNumber[Math.floor(Math.random() * SelectNumber.length)];
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 3 &&
      mainSelectSymbolsElement.value == 2
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 2) {
        continue;
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 3) {
        randomZ =
          SelectSymbols[Math.floor(Math.random() * SelectSymbols.length)];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    } else if (
      mainSelectNumberElement.value == 3 &&
      mainSelectLowercaseLettersElement.value == 2 &&
      mainSelectCapitalLettersElement.value == 2 &&
      mainSelectSymbolsElement.value == 3
    ) {
      aLineOfPasswordElement.style =
        "background: rgba(200,255,200,1.0); padding: 3px 7px; width: 100vw; height: auto; text-align: center; font-size: 18px; font-weight: 600;";

      y = Math.floor(Math.random() * 4);
      if (y == 0 || y == 3) {
        continue;
      }
      if (y == 1) {
        randomZ =
          SelectLowercaseLetters[
            Math.floor(Math.random() * SelectLowercaseLetters.length)
          ];
      }
      if (y == 2) {
        randomZ =
          SelectCapitalLetters[
            Math.floor(Math.random() * SelectCapitalLetters.length)
          ];
      }
      textPassword.push(`${randomZ}`);
      x = x + 1;
    }
    const output = textPassword.join("");

    console.log(output);
    aLineOfPasswordElement.innerHTML = `${output}`;
  }
});
