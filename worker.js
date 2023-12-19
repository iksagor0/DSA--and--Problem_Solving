self.onmessage = (msg) => {
  console.log("Start Working");
  let total = 0;
  for (let i = 0; i < 10000000000; i++) {
    total += i;
  }

  postMessage(total);
};
