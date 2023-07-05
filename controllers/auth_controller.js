const jwt = require("jsonwebtoken");
const fs = require("fs");

const users = require("../data/user.json");

module.exports = {
  login: (req, res) => {
    return res.status(200).render("login");
  },

  doLogin: (req, res, next) => {
    const { username, password } = req.body;
    const userIndex = users.findIndex(
      (u) => u.username === username && u.password === password
    );

    if (userIndex == -1) {
      return res.redirect("/auth/unauthorized");
    }

    const userLogin = users[userIndex];
    const token = jwt.sign(userLogin, "secret-binar");

    if (userLogin.role == "superuser") {
      return res.redirect("/user/dashboard");
    } else {
      return res.status(200).json({
        success: true,
        token,
        message: "Successfully logged in",
      });
    }
  },

  unauthorize: (req, res, next) => {
    return res.status(401).render("unauthorized");
  },

  register: (req, res) => {
    return res.render("register");
  },

  doRegister: (req, res) => {
    const { username, password } = req.body;
    const newUser = { username, password, role: "user" };

    let appendUser = [];
    users.push(newUser);
    appendUser = users;

    const jsonData = JSON.stringify(appendUser, null, 2);
    fs.writeFileSync("data/user.json", jsonData, "utf8", (err) => {
      if (err) {
        res.redirect("error");
      }
    });

    return res.redirect("/auth/login");
  },
};
