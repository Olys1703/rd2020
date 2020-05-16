async function runPromisesInSeries(promisList) {
  promisList.unshift(() => Promise.resolve());
  for (let i = 0; i < promisList.length; i++) {
    await promisList[i]();
  }
}
