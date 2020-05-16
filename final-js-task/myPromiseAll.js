function myPromiseAll(promises) {
  if (promises.length === 0) {
    Promise.resolve();
  }
  const resolves = [];
  let totalResolvedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      item
        .then((result) => {
          resolves[index] = result;
          totalResolvedPromises += 1;
          if (totalResolvedPromises === promises.length) {
            resolve(resolves);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
