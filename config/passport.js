const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
let mysql = require("mysql");
const bcrypt = require("bcryptjs");

// DataBase Stuff
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "PawFinder",
});

db.connect(function (error) {
  if (error) throw error;

  console.log("MYSQL is connected");
});

console.log("db ", db);

// registration handler
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      var sql = "SELECT * FROM users WHERE ?";
      db.query(sql, [{ id: req.params.id }], function (err, user) {
        if (err) {
          console.log("err into the db", err);

          return done(err);
        }
        if (user.length != 0) {
          console.log(user);
          console.log("err user already here");
          return done(null, false, { message: "Email is already in use." });
        }
        console.log("before db", req.body);

        var sql = "INSERT INTO users SET ?";
        db.query(
          sql,
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: email,
            password: password,
          },
          function (err, dbUser) {
            if (err) throw err;
            console.log(dbUser);

            return done(null, dbUser);
          }
        );
      });
    }
  )
);

// login handler
passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      var sql = "SELECT * FROM users WHERE ?";

      db.query(sql, [{ email: email }], function (err, user) {
        if (user.length === 0) {
          return done(null, false, { message: "Email incorrect" });
        }
        if (!verifyPassword(password, user[0].password)) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);

function verifyPassword(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
}

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;
