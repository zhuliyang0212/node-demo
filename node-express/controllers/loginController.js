exports.login = (req, res) => {
  console.log(req);
  if (req.params.username) {
    // cookie
  }
  res.send("login");
};

exports.register = (req, res) => {
  console.log(req);
  res.send("reg");
};
