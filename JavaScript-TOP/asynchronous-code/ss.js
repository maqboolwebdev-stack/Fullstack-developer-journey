const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(__dirname, '..', '..', '..', 'git_test', 'style.css');

async function readFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    // 1. Regular Expression (RegEx) se 'c' ko dhoondna
    // 'g' ka matlab globally poori file mein, aur 'i' ka matlab case-insensitive (c aur C dono)
    const matches = data.match(/c/gi);

    // 2. Agar matches milein to unki length (ginti) nikalna, nahi to 0
    const totalCount = matches ? matches.length : 0;

    console.log("--- Ginti Ka Result ---");
    console.log(`Letter 'c' (ya 'C') poori file mein total ${totalCount} baar aaya hai.`);

  } catch (err) {
    console.error('Error: File nahi mil saki!', err.message);
  }
}

readFile();
