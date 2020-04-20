const userCtrl = {}

const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    await User.create(req.body);
    res.json({ message: "Usuario creado" })
};

userCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Usuario eliminado correctamente" })
};

module.exports = userCtrl