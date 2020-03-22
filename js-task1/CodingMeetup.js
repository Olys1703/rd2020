
export function countDevelopers(list) {
  return list.reduce((acc, item) => (item.continent === 'Europe' && item.language === 'JavaScript' ? acc + 1 : acc), 0);
}

export function greetDevelopers(list) {
  list.forEach((item) => { item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`; });
  return list;
}

export function isRubyComing(list) {
  return list.some((item) => item.language === 'Ruby');
}

export function getFirstPython(list) {
  const firstDeveloper = list.find((item) => item.language === 'Python');
  return firstDeveloper
    ? `${firstDeveloper.firstName}, ${firstDeveloper.country}` : 'There will be no Python developers';
}

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

export function isSameLanguage(list) {
  const { language } = list[0];
  return list.every((item) => item.language === language);
}

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

export function isAgeDiverse(list) {
  const arrOfAgeInterval = list.reduce((acc, item) => {
    const index = Math.floor(item.age / 10) > 10 ? 10 : Math.floor(item.age / 10);
    acc[index - 1] = true;
    return acc;
  }, new Array(10).fill(false));
  return arrOfAgeInterval.every((item) => item);
}

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

export function findSenior(list) {
  const highAge = list.reduce((acc, item) => (item.age > acc ? item.age : acc), 0);
  return list.filter((item) => item.age === highAge);
}

export function addUsername(list) {
  return list.map((item) => {
    item.username = item.firstName.toLowerCase()
    + item.lastName[0].toLowerCase()
    + (new Date().getFullYear() - item.age);
    return item;
  });
}

export function getAverageAge(list) {
  return Math.round(list.reduce((acc, item) => acc + item.age, 0) / list.length);
}

export function findAdmin(list, lang) {
  return list.filter((item) => item.language === lang && item.githubAdmin === 'yes');
}

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

export function orderFood(list) {
  return list.reduce((acc, item) => {
    acc[item.meal] = acc[item.meal] ? ++acc[item.meal] : 1;
    return acc;
  }, {});
}

export function findOddNames(list) {
  return list.filter((item) => (1 & item.firstName.split('').reduce((acc, item) => acc + item.charCodeAt(0), 0)));
}
