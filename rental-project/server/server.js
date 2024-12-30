import http from "http";
import url from "url";
import {
  readDatabase,
  writeDatabase,
  parseRequestBody,
  sendResponse,
  redirectTo,
} from "./utils.js";

// Create the server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  if (req.method === "POST" && parsedUrl.pathname === "/sign-up") {
    parseRequestBody(req, (parsedData) => {
      const { email, password } = parsedData;

      // Check if the email already exists
      const db = readDatabase();
      const existingUser = db.users.find((user) => user.email === email);

      if (existingUser) {
        sendResponse(res, 400, "Email already exists.");
      } else {
        // Add new user to the database
        db.users.push({ email, password });
        writeDatabase(db);

        // Redirect to home page after successful sign-up
        redirectTo(res, "/");
      }
    });
  } else if (req.method === "POST" && parsedUrl.pathname === "/sign-in") {
    parseRequestBody(req, (parsedData) => {
      const { email, password } = parsedData;

      // Check if the email exists and the password matches
      const db = readDatabase();
      const user = db.users.find((user) => user.email === email);

      if (user && user.password === password) {
        // Redirect to home page after successful sign-in
        redirectTo(res, "/");
      } else {
        sendResponse(res, 400, "Invalid email or password.");
      }
    });
  } else {
    // Handle other routes, if any
    sendResponse(res, 404, "Not Found");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
