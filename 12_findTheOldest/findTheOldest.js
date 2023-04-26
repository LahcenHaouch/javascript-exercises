function getYearOfDeath(yearOfDeath) {
  return yearOfDeath ?? new Date().getFullYear();
}

const findTheOldest = function(people) {
  return people.reduce((acc, current) => {
    const firstPersonAge = getYearOfDeath(acc.yearOfDeath) - acc.yearOfBirth;
    const secondPersonAge = getYearOfDeath(current.yearOfDeath) - current.yearOfBirth;

    return firstPersonAge > secondPersonAge ? acc : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
