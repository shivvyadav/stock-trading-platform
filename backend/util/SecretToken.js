require("dotenv").config();
const jwt = require("jsonwebtoken");

function getTokenKey() {
  const key = process.env.TOKEN_KEY;
  if (!key) {
    // Provide a helpful runtime error so the developer knows to set the env var.
    throw new Error(
      'TOKEN_KEY is not set. Add TOKEN_KEY to backend/.env (do NOT commit real secrets to source control)'
    );
  }
  return key;
}

module.exports.createSecretToken = (id) => {
  const secret = getTokenKey();
  return jwt.sign({ id }, secret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
