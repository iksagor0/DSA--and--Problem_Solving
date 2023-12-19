const worker = new Worker("./worker.js");
const calculateBtn = document.getElementById("calculateBtn");
const consoleBtn = document.getElementById("consoleBtn");

calculateBtn.addEventListener("click", () => {
  worker.postMessage("Hello, world!");
  // let total = 0;
  // for (let i = 0; i < 10000000000; i++) {
  //   total += i;
  // }
  // alert(total);
});

worker.onmessage = (msg) => {
  alert(msg.data);
};

consoleBtn.addEventListener("click", () => console.log("Something other doing"));
