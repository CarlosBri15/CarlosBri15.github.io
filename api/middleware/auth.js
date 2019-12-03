const services = require('../services/token');

function isAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(403).send({ message: 'Access denied, login required' });

  const tk = token.split(" ")[1];

  services.decodeToken(token).then(response => {
      req.user = response;
  }).catch(response => {
      res.status(response.status)
  })
}

module.exports = isAuth
