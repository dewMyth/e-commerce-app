const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  // console.log(res);
  if (authHeader) {
    console.log(authHeader);
    // const token = authHeader.split(" ")[1];
    const token = authHeader;

    jwt.verify(token, process.env.JWT_SECURITY_KEY, (err, user) => {
      if (err) res.status(401).json("Token is not valid!");

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    // console.log(req.user);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("You are not authorized!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user.isAdmin);
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(401).json("You are not and admin, no authorized!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
