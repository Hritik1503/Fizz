function fizzBuzzPhone(phoneNumber) {
  let sum = 0;
  let output = '';
  for (let i = 0; i < phoneNumber.length; i++) {
    sum += parseInt(phoneNumber[i]);
  }
  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      output += 'FizzBuzz ';
    } else if (i % 4 === 0) {
      output += 'Fizz ';
    } else if (i % 5 === 0) {
      output += 'Buzz ';
    } else {
      output += i + ' ';
    }
  }
  return output.trim();
}

console.log(fizzBuzzPhone('8770820133'));
