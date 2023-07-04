const User = require("../model/User");

const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find(req.user.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const singleUser = (req, res, next) => {
  console.log(req.params.id);

  User.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }
    return res.send(data);
  });
};

const editUser = (req, res, next) => {
  console.log(req.params.id);
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        return next(err);
      }
      return res.send(data);
    }
  );
};
const deleteUser = (req, res, next) => {
  console.log(req.params.id);
  User.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    }
    return res.send(data);
  });
};

module.exports = {
  singleUser,
  getAllUser,
  editUser,
  deleteUser,
};
