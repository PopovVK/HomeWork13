function fillArray() {
  const rows = parseInt(prompt('Введіть кількість рядків:'));
  const cols = parseInt(prompt('Введіть кількість стовпців:'));

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    console.log('Некоректні вхідні дані. Будь ласка, введіть додатні числа для кількості рядків та стовпців.');
    return;
  }

  const array = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
      row.push(value);
    }

    array.push(row);
  }

  return array;
}

const userArray = fillArray();
console.log(userArray);
