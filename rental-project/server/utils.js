import fs from "fs";
import { parse } from "querystring";
import path from "path";

// Define the path to the db.json file using __dirname
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const dbFilePath = path.join(__dirname, "db.json");

// Read the database file (db.json) to store users
export const readDatabase = () => {
  const data = fs.readFileSync(dbFilePath);
  return JSON.parse(data);
};

// Write data to the database (db.json)
export const writeDatabase = (data) => {
  fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

// Parse the request body into key-value pairs (like email and password)
export const parseRequestBody = (req, callback) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const parsedData = parse(body);
    callback(parsedData);
  });
};

// Send a response with a specific status code and message
export const sendResponse = (res, statusCode, message) => {
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(message);
};

// Redirect function
export const redirectTo = (res, path) => {
  res.writeHead(302, {
    Location: path,
  });
  res.end();
};
