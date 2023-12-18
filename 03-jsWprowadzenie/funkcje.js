// Ctrl + Shift + C -> Console

function fibonacci(n) {
  if (n < 2) {
    return n; //To jest warunek bazowy, który kończy rekurencję,
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, ""); // To jest wyrażenie regularne używane w połączeniu z metodą replace() do usunięcia z tekstu wszystkich znaków, które nie są literami (a-z) ani cyframi (0-9).
  return cleanText == cleanText.split("").reverse().join(""); //Służy do porównywania wartości, sprawdzając również ich typy
}

function getType(value) {
  return typeof value;
}

function amountToCoins(amount, coins) {
  let remainingAmount = amount;
  const result = {};

  coins.sort((a, b) => b - a);

  for (const coin of coins) {
    const numberOfCoins = Math.floor(remainingAmount / coin);

    if (numberOfCoins > 0) {
      result[coin] = numberOfCoins; //result[25] = 1
      remainingAmount -= numberOfCoins * coin; //46 - (1 * 25) = 21
    }
  }

  return result;
}

// Przykłady
console.log(fibonacci(4));
console.log(isPalindrome("kajak"));
console.log(getType(true));
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
