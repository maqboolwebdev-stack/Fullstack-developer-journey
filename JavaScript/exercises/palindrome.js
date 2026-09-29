function palindromeChecker(str) {
    
  if (typeof str !== 'string') {
    console.log('only strings allowed');
    return;
  }

  const rawString = str.toLowerCase().replaceAll(' ', '');

  const reversString = [...rawString].reverse().join('');

  if (rawString === reversString) {
    console.log(
      `your Text is ${str} and it is a Palindrome actually:{ ${reversString} }`,
    );
  } else {
    console.log(
      `your Text is '${str}' and it is not a Palindrome --> ${reversString}`,
    );
  }
}

palindromeChecker('Waqas');
palindromeChecker('racecar');
palindromeChecker('hello');
palindromeChecker('Madam');
palindromeChecker(2);
