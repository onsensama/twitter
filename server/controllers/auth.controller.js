// inscription
const userModel = require("../models/user.model");

const signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await userModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    // const errors = signUpErrors(err);
    res.status(400).send({ err });
  }
};

// connexion

// déconnexion

module.exports = { signUp };
