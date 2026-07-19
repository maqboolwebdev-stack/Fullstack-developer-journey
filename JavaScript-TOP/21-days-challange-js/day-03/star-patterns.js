// Q1 Right-Angled star triangle

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let star = '';
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}

// Q2 Inverted Right-Angled star triangle

// let rows2 = 5;

for (let i = rows; i >= 1; i--) {
  let star = '';
  for (let j = i; j >= 1; j--) {
    star += '*';
  }
  console.log(star);
}

// pyramid pattern

let pyramidRows = 5;

for (let i = 1; i <= 2 * pyramidRows - 1; i += 2) {
  let star = '';
  const currentRow = (i + 1) / 2;
  for (let j = 1; j <= pyramidRows + currentRow - 1; j++) {
    if (j <= pyramidRows - currentRow) {
      star += ' ';
    } else {
      star += '*';
    }
  }
  console.log(star);
}
