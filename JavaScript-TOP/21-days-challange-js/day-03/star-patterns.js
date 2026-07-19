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
