import jwt from "express-jwt";
import config from "../../config";

/**
 * Receive a token from header and send it to the JWT token underneath the function
 * @param req
 */
const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  null;
};

/**
 * Creates a JWT token
 */
const isAuth = jwt({
  secret: config.jwtSecret,
  algorithms: [config.jwtAlgorithm],
  userProperty: "token",
  getToken: getTokenFromHeader,
});

export default isAuth;
