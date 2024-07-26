exports.userAll = `SELECT * FROM user`;

exports.createUser = (username, nickname, password) => {
  return `INSERT INTO user (username, nickname, password) VALUES ('${username}', '${nickname}', '${password}')`;
};

exports.queryUser = (username, password) => {
  // return `INSERT INTO user (username, nickname, password) VALUES ('${username}', '${nickname}', '${password}')`
  return `SELECT * FROM user`;
};
