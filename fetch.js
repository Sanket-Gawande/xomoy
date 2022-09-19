let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

let response = await fetch("https://pastebin.com/raw/hbAZZiJx", {
  method: "GET",
  headers: headersList,
});

let data = await response.text();
console.log(data);
