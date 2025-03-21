const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  let token = req.header('Authorization');
  console.log({ token });

  if (!token) {
    return res.status(403).json({ msg: 'Authorization denied' });
  }

  // Remove "Bearer " prefix if present
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length).trimLeft();
  }

  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    console.log({ verify });
    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
