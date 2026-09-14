function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}

console.log(pow2(2, 3)); // 8

let company = {
  sales: [
    {
      name: 'John',
      salary: 1000,
    },
    {
      name: 'Alice',
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000,
      },
      {
        name: 'Alex',
        salary: 1800,
      },
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300,
      },
    ],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(sumSalaries(company));

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('Hmm');
}

countDown(7);

function countDownRecursive(n) {
  if (n <= 0) {
    console.log('yes working!');
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

countDownRecursive(3);

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: 'Zoo',
      children: [
        {name: 'Waqas', children: []},
        {name: 'Maqbool', children: []}

      ]
    }
  ]
}


printChildrenRecursive(tree);

function sum(n) {
  if(n === 0) {
    return 0;
  }
  else {
    return n + sum(n - 1);
  }
}

console.log(sum(10));
