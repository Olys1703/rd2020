//Count the number of JavaScript developers coming from Europe
export function countDevelopers(list) {
  return list.reduce((acc, item) => (item.continent === 'Europe' && item.language === 'JavaScript' ? acc + 1 : acc), 0);
}
//Greet developers
export function greetDevelopers(list) {
  list.forEach((item) => { item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`; });
  return list;
}
//Is Ruby coming?
export function isRubyComing(list) {
  return list.some((item) => item.language === 'Ruby');
}
//Find the first Python developer
export function getFirstPython(list) {
  const firstDeveloper = list.find((item) => item.language === 'Python');
  return firstDeveloper
    ? `${firstDeveloper.firstName}, ${firstDeveloper.country}` : 'There will be no Python developers';
}
//Prepare the count of languages
export function countLanguages(list) {
  return list.reduce((acc, item) => {
    if (acc[item.language]) {
      acc[item.language] += 1;
    } else {
      acc[item.language] = 1;
    }
    return acc;
  }, {});
}
//Can they code in the same language?
export function isSameLanguage(list) {
  const { language } = list[0];
  return list.every((item) => item.language === language);
}
//Find the most senior developer
export function findSenior(list) {
  const highAge = list.reduce((acc, item) => (item.age > acc ? item.age : acc), 0);
  return list.filter((item) => item.age === highAge);
}
//Will all continents be represented?
export function allContinents(list) {
  const namesOfContinents = list.reduce((acc, item) => {
    acc[item.continent] = true;
    return acc;
  }, {});
  return !!(namesOfContinents.Africa
          && namesOfContinents.Americas
          && namesOfContinents.Asia
          && namesOfContinents.Europe
          && namesOfContinents.Oceania);
}
//Is the meetup age-diverse?
export function isAgeDiverse(list) {
  const arrOfAgeInterval = list.reduce((acc, item) => {
    const index = Math.floor(item.age / 10) > 10 ? 10 : Math.floor(item.age / 10);
    acc[index - 1] = true;
    return acc;
  }, new Array(10).fill(false));
  return arrOfAgeInterval.every((item) => item);
}
//Create usernames
export function addUsername(list) {
  return list.map((item) => {
    item.username = item.firstName.toLowerCase()
    + item.lastName[0].toLowerCase()
    + (new Date().getFullYear() - item.age);
    return item;
  });
}
//Find the average age
export function getAverageAge(list) {
  return Math.round(list.reduce((acc, item) => acc + item.age, 0) / list.length);
}
//Find GitHub admins
export function findAdmin(list, lang) {
  return list.filter((item) => item.language === lang && item.githubAdmin === 'yes');
}
//Is the meetup language-diverse?
export function isLanguageDiverse(list) {
  const countOfLangUser = list.reduce((acc, item) => {
    acc[item.language] = acc[item.language] ? acc[item.language] += 1 : 1;
    return acc;
  }, {});
  const arrCountOfUser = [];
  for (const key in countOfLangUser) {
    arrCountOfUser.push(countOfLangUser[key]);
  }
  return Math.max(...arrCountOfUser) / Math.min(...arrCountOfUser) <= 2;
}
//Order the food
export function orderFood(list) {
  return list.reduce((acc, item) => {
    acc[item.meal] = acc[item.meal] ? ++acc[item.meal] : 1;
    return acc;
  }, {});
}
//Find the odd names
export function findOddNames(list) {
  return list.filter((item) => (1 & item.firstName.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0)));
}
//Ask for missing details
export function askForMissingDetails(list) {
  return list.filter((item) => {
    for (const key in item) {
      if (item[key] === null) {
        item.question = `Hi, could you please provide your ${key}.`;
        return true;
      }
    }
    return false;
  });
}