const findTheOldest = function(people) {
    let ages = people.map(getAge);
    let indexOldest = ages.indexOf(Math.max(...ages));
    return people[indexOldest];
};

function getAge(person) {
  let deathYear;
  if (typeof person.yearOfDeath === "undefined") {
    deathYear = new Date().getFullYear();
  } else {
    deathYear = person.yearOfDeath;
  }
  let birthYear = person.yearOfBirth;
  return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
