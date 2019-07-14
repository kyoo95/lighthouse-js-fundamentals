function ageCalculator (name, yearOfBirth, currentYear) {
  var years = (currentYear - yearOfBirth);

  yearOfBirth = new Date(yearOfBirth);
  currentYear = new Date(currentYear);
  return name + " is " + years + " years old.";
}

console.log(ageCalculator("Kevin", 1995, 2019));