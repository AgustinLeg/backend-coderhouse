const LocalStrategy = require("passport-local");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { deleteOne } = require("../models/user");

passport.use(
  "login",
  new LocalStrategy(async (userName, password, done) => {
    const user = await User.findOne({ userName });
    if (!user) {
      return done(null, false, { message: "Incorrect username." });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: "Incorrect password." });
    }
    return done(null, user);
  })
);

passport.use(
  "signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    async function verify(req, userName, password, done) {
      try {
        const userExist = await User.findOne({ userName });
        if (userExist) {
          return done(null, false, {
            message: "The username is already taken",
          });
        }
        const hashedPassword = bcrypt.hashSync(
          password,
          bcrypt.genSaltSync(10),
          null
        );
        const newUser = {
          userName,
          password: hashedPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        };
        const user = await User.create(newUser);
        return done(null, user);
      } catch (error) {
        console.log(error);
        console.log("error passport");
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id) => {
  User.findById(id, deleteOne);
});

module.exports = passport;
