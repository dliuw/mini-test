function apaBole() {
  const text = [];
  for (let i = 0; i < 100; i++) {
    const iteration = i + 1;
    text[i] = iteration;
    if (iteration % 3 === 0 && iteration % 5 === 0) {
      text[i] = "ApaBole";
    } else if (iteration % 3 === 0) {
      text[i] = "Apa";
    } else if (iteration % 5 === 0) {
      text[i] = "Bole";
    }
  }

  return text;
}

const result = apaBole();
console.log(`${result}`);
