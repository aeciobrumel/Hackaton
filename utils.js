function sleep(ms) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}

function message(msg, timems) {
  let time = timems ?? 1000;
  console.log("\nMessage: ", msg);
  sleep(time);
}

module.exports = { message };
