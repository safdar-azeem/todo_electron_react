// You can write any auth related middlewares here...

const authProtect = function (req, res, next) {
  next();
};

module.exports = authProtect;
