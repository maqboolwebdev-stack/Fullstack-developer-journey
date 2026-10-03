// Part 1: Scope bug
function printNumbers() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log('Number: ' + i);
    }, 100);
  }
}
printNumbers();

function getUser() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ name: "Ali", age: 25 });
    }, 500);
  });
}

async function main() {
  const user = await getUser();
  console.log("User name: " + user.name);
}

main();
