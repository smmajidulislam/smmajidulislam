function funReturnSameString(str) {
  const words = str.split(" ");

  const processedWords = words.map((word) => {
    const shuffled = word.split("").sort(() => Math.random() - 0.5);

    const sorted = shuffled.sort((a, b) => word.indexOf(a) - word.indexOf(b));

    return sorted.join("");
  });

  return processedWords.join(" ");
}

console.log(funReturnSameString("i love coding")); // Output: "i love coding"
