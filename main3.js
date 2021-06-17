function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return 'うるう年';
  } else if (year % 400 === 0) {
    return 'うるう年';
  } else {
    return 'うるう年ではない';
  }
}

console.log(leapYear(2020));
console.log(leapYear(2021));