const student = {
  name: 'Sara',
  marks: [80, 45, 90, 30],
  showName: function () {
        setTimeout( () => {
            console.log('Student: ' + this.name);
        }, 100);
  },
};

student.showName();

const passed = student.marks.filter(function (m) {
  return m >= 50;
});
console.log('Passed marks: ' + passed);


function fetchScore(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id === 1) {
        resolve(95);
      } else {
        reject(new Error("Student nahi mila"));
      }
    }, 200);
  });
}

async function showScore(id) {
  try {
    const score = await fetchScore(id);
    console.log("Score: " + score);
  } catch (e) {
    console.log("Error: " + e.message);
  }
}

showScore(1);
showScore(2);
