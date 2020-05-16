function delay(t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t);
  });
}
