const generateNumbers = ({ allowNegative, pages, signs = ["+", "-"] }) => {
  let producedNumbers = 0;
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const el = document.getElementById("math");

  const count = 45 * pages;

  while (producedNumbers !== count) {
    const first = numbers[Math.floor(Math.random() * numbers.length) + 0];
    const sign = signs[Math.floor(Math.random() * signs.length) + 0];
    const second = numbers[Math.floor(Math.random() * numbers.length) + 0];

    if (!allowNegative && sign === "-" && Math.sign(first - second) === -1) {
      continue;
    }

    if (sign === "/" && second === 0) {
      continue;
    }

    producedNumbers++;

    const div = document.createElement("div");
    div.textContent = `${first} ${sign} ${second} =`;
    el.appendChild(div);
  }
};

generateNumbers({ allowNegative: false, pages: 8 });
