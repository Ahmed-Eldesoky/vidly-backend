module.exports = function (req, res, next) {

  // 401 Unauthorized ==> not logged in yet.
  // 403 Forbidden ==> does not have the access.
  if (!req.user.IsAdmin) return res.status(403).send('Access denied.');
  next();
};
