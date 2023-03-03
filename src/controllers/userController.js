import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, email, username, password, location } = req.body;
  await User.create({ name, email, username, password, location });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login User");
export const see = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("Logout User");
