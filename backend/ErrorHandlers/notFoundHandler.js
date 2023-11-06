const notFoundError = (req, res) => {
  res.send("This route does not exist");
};

module.exports = notFoundError;
