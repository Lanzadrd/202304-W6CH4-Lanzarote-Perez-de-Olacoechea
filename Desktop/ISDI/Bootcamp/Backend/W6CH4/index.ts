import http from "http";
import url from "url";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || "5500";

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url!);

  if (!parseUrl) {
    server.emit("error", new Error("No url in the request"));
  }

  const { pathname } = parseUrl;
  if (!parseUrl.query) {
    server.emit("error", new Error("404"));
  }

  const { query } = parseUrl;
  const parseQuery = query?.split("&");
  const numb1: string = parseQuery[0];
  const numb2: string = parseQuery[1];

  const a = Number(numb1.substring(2, 10));
  const b = Number(numb2.substring(2, 10));

  const operations = () => {
    const sum = a + b;
    const subtraction = a - b;
    const multiply = a * b;
    const division = a / b;

    return (
      ` <p>${a}+${b}=
        ${sum}</p>` +
      `<p> ${a}-${b}=
        ${subtraction}</p>` +
      `<p> ${a}*${b}=
        ${multiply}</p>` +
      `<p> ${a}/${b}=
        ${division}</p> `
    );
  };

  operations();
  res.write(`<h1>Operaciones:${operations()}</h1>`);
  res.end();
});
