function myPromiseRace(iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach((item) => {
      item.then((data) => resolve(data)).catch((error) => reject(error));
    });
  });
}
