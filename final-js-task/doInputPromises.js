function doInputPromises(promises) {
  promises.forEach((item, index) => {
    item.catch(() => {
      console.log(index);
    });
  });
}
