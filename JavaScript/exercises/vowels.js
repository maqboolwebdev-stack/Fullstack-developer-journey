function vowelsCounter(str) {

  let vowelsCounting = 0;
  let vowels = [];
  
  const rawString = str.toLowerCase().replaceAll(' ', '');
  const string = [...rawString];

  string.forEach((letter) => {
    if ('aeiou'.includes(letter)) {
      vowels.push(letter);
      vowelsCounting++;
    }
  });

  const result = `Appki string hai: ${string}\nIsme vowels hain: ${vowels} (Total ${vowelsCounting} vowels)`;
  console.log(result);
}
vowelsCounter('WaqAs');
vowelsCounter('Iimran');
vowelsCounter('a e i o u A E I O U');
