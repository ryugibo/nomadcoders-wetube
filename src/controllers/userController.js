import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const pageTitle = "Create Account";
  const { name, email, username, password1, password2, location } = req.body;
  if (password1 !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "Password confirmation does not match.",
    });
  }
  const isExistsUsername = await User.exists({
    $or: [{ username }, { email }],
  });
  if (isExistsUsername) {
    return res.status(400).render("join", {
      pageTitle: "Create Account",
      errorMessage: "This username/email is already taken.",
    });
  }
  await User.create({ name, email, username, password: password1, location });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Login User");
export const see = (req, res) => res.send("See User");
export const logout = (req, res) => res.send("Logout User");
