const jwt = require("jsonwebtoken");

const newAnonKey = jwt.sign(
  {},
  "a7f9d2b8c4e61f0d3b8a9e2f7c5d4e1f9a2b3c7d8e5f0a1b9c6d4e2f7a8b9c3d",
  {
    expiresIn: "10y",
    audience: "anon",
  }
);
const newServiceRoleKey = jwt.sign(
  {},
  "a7f9d2b8c4e61f0d3b8a9e2f7c5d4e1f9a2b3c7d8e5f0a1b9c6d4e2f7a8b9c3d",
  {
    expiresIn: "10y",
    audience: "service_role",
  }
);

console.log("New Anon Key:", newAnonKey);
console.log("New Service Role Key:", newServiceRoleKey);
