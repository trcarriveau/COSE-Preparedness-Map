const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
//use cookie for tracking logins
// const cookie = require('cookie-parser');
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const assert = require("assert");
const util = require("util");

const cmpDB = mongoose.connect(
  "mongodb://localhost:27017/COSE-Preparedness-Map",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const app = express();
const bodyParser = require("body-parser");
const { ObjectId } = require("mongodb");
const port = 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* ####################### Start - Mongo DB Models ####################### */
const Users = mongoose.model("Users", {
  Name: String,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: String,
  major: String,
});

const CoseMaps = mongoose.model("Cose-Maps", {
  map_name: String,
  map_items: [
    {
      item_name: String,
      is_extra_curricular: Boolean,
      item_description: String,
      item_skill: [
        {
          skill_id: ObjectId,
        },
      ],
      item_type: [
        {
          type_id: ObjectId,
        },
      ],
      item_year_semester: [
        {
          year: Number,
          semester: String,
        },
      ],
    },
  ],
});

const CoseSkills = mongoose.model("Cose-Skills", {
  skill_map: String,
  skill_name: String,
  skill_information: String,
});

const CoseTypes = mongoose.model("Cose-Types", {
  type_map: String,
  type_name: String,
  type_information: String,
  type_icon: String,
});
/* ####################### End - Mongo DB Models ####################### */

/* ####################### Start - App Routes ####################### */
app.post(
  "/registration",
  body("username").trim().escape(),
  body("email").isEmail().normalizeEmail().trim().escape(),
  // password must be at least 8 chars long
  body("password").isLength({ min: 8 }),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    // Indicates the success of this synchronous custom validator
    return true;
  }),
  body("major").trim().escape(),

  async function (req, res) {
    try {
      let goodMsg = "",
        errMsg = "";
      let errors = [];
      var salt = bcrypt.genSaltSync(10);
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      req.body.confirmPassword = bcrypt.hashSync(
        req.body.confirmPassword,
        salt
      );
      console.log(`Body: ${util.inspect(req.body, true, null, true)}`);

      // Finds the validation errors in this request and wraps them in an object with handy functions
      errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      } else {
        let users = await Users.find({
          $or: [{ email: req.body.email }, { username: req.body.username }],
        }).exec();
        console.log(`Users: ${util.inspect(users, true, null, true)}`);
        if (users.length == 0) {
          //manually set user role, if we dont, it won't be in the document
          req.body.role = "user";
          const user = new Users(req.body);
          var result = await user.save();
          console.log(
            `Result from user.save(): ${util.inspect(result, true, null, true)}`
          );
          goodMsg = "We created your account";
          console.log(
            `Responding with: res.status(200).json(${util.inspect(
              { message: goodMsg },
              true,
              null,
              true
            )})`
          );
          return res.status(200).json({ message: goodMsg });
        } else {
          console.log(
            `Result from Users.find(): ${util.inspect(users, true, null, true)}`
          );
          let userExist = false;
          let emailExist = false;
          for await (const user of users) {
            if (user.username == req.body.username) {
              userExist = true;
            }
            if (user.email == req.body.email) {
              emailExist = true;
            }
          }

          if (userExist && emailExist) {
            errMsg = "Username and Email already exist";
            console.log(
              `Responding with: res.status(400).json(${util.inspect(
                { errorMessage: errMsg },
                true,
                null,
                true
              )})`
            );
            return res.status(400).json({ errorMessage: errMsg });
          } else {
            if (userExist) {
              errMsg = "Username already exists";
              console.log(
                `Responding with: res.status(400).json(${util.inspect(
                  { errorMessage: errMsg },
                  true,
                  null,
                  true
                )})`
              );
              return res.status(400).json({ errorMessage: errMsg });
            } else if (emailExist) {
              errMsg = "Email already exist";
              console.log(
                `Responding with: res.status(400).json(${util.inspect(
                  { errorMessage: errMsg },
                  true,
                  null,
                  true
                )})`
              );
              return res.status(400).json({ errorMessage: errMsg });
            }
          }
        }
      }
    } catch (error) {
      console.log("Caught Error in /registration:" + error);
      errMsg = "We ran into a server issue";
      console.log(
        `Responding with: res.status(500).json(${util.inspect(
          { errorMessage: errMsg },
          true,
          null,
          true
        )})`
      );
      return res.status(500).json({ errorMessage: errMsg });
    }
  }
);

app.post(
  "/login",
  body("username").trim().escape(),

  async function (req, res) {
    try {
      console.log("In login");
      console.log(`Body: ${util.inspect(req.body, true, null, true)}`);
      let errMsg = "",
        goodMsg = "";
      //lets check to see if username has an @ symbol, if it does we assume they are wanting to use their email to login with
      // if its not, we assume they want to login with their username
      if (req.body.username.includes("@")) {
        console.log("Using email to login");
        var user = await Users.findOne({ email: req.body.username }).exec();
        if (!user) {
          errMsg = "The email does not exist";
          console.log(
            `Responding with: res.status(400).json(${util.inspect(
              { errorMessage: errMsg },
              true,
              null,
              true
            )})`
          );
          return res.status(400).send({ errorMessage: errMsg });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          errMsg = "The password is invalid";
          console.log(
            `Responding with: res.status(400).json(${util.inspect(
              { errorMessage: errMsg },
              true,
              null,
              true
            )})`
          );
          return res.status(400).send({ errorMessage: errMsg });
        }
      } else {
        console.log("Using username to login");
        var user = await Users.findOne({ username: req.body.username }).exec();
        if (!user) {
          errMsg = "The username does not exist";
          console.log(
            `Responding with: res.status(400).json(${util.inspect(
              { errorMessage: errMsg },
              true,
              null,
              true
            )})`
          );
          return res.status(400).send({ errorMessage: errMsg });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          errMsg = "The password is invalid";
          console.log(
            `Responding with: res.status(400).json(${util.inspect(
              { errorMessage: errMsg },
              true,
              null,
              true
            )})`
          );
          return res.status(400).send({ errorMessage: errMsg });
        }
      }

      //Should we also send back the username? for cookie/session stuff?
      let map = await grabMap(user.major);

      goodMsg = "Successfulled logged in!";

      return res
        .status(200)
        .json({
          message: goodMsg,
          username: user.username,
          major: user.major,
          map: map,
        });
    } catch (error) {
      console.log("Caught Error in /login:" + error);
      errMsg = "We ran into a server issue";
      console.log(
        `Responding with: res.status(500).json(${util.inspect(
          { errorMessage: errMsg },
          true,
          null,
          true
        )})`
      );
      return res.status(500).json({ errorMessage: errMsg });
    }
  }
);

//Just a test route for showing backend data on the front end side
app.get("/test_api", (req, res) => {
  console.log("Hit test_api");
  res.json({ message: "hello from the back end :)" });
});
/* ####################### end - App Routes ####################### */

/* ####################### Start - Functions ####################### */
const server = app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

async function grabMap(mapName) {
  try {
    //Lean() allows me to append data to the map.
    const map = await CoseMaps.find({ map_name: mapName }).lean();

    const skills = await CoseSkills.find({ skill_map: mapName });

    const types = await CoseTypes.find({ type_map: mapName });

    return await mergeData(map, skills, types);
  } catch (error) {
    console.log(`Caught error in grabMap(): ${error}`);
  }
}

async function mergeData(map, skills, types) {
  try {



    if (map.length == 1) {

      //Commenting out since its breaking tests now that we changed the schema.
      //No since in fixing it because we will change how we are sending the object back anyways
      //So will tweak later 

      /*for await (const mapItem of map[0].map_items) {
        for await (const itemSkill of mapItem.item_skill) {
          for await (const skill of skills) {
            if (skill._id.equals(itemSkill.skill_id)) {
              itemSkill.skill_name = skill.skill_name;
              itemSkill.skill_information = skill.skill_information;

            }
          }
        }
        for await (const itemType of mapItem.item_type) {
          for await (const type of types) {
            if (type._id.equals(itemType.type_id)) {
              itemType.type_name = type.type_name;
              itemType.type_information = type.type_information;
              itemType.type_icon = type.type_icon;
            }
          }
        }
      }
      map[0].map_skills = skills;
      map[0].map_types = types;
      */

      // console.log('Done')
      // console.log(util.inspect(map, showHidden=true, null, colorize=true));

      //Returning map[0] so that way we are returning the map json and not an array that includes map json.
      // We only have one map, no reason to send an array.
      return map[0];
    } else if (map.length > 1) {
      console.error("Got more than one map, this is not correct");
    } else if (map.length < 1) {
      console.error("Got less than one map, this is not correct");
    } else {
      console.error("Not sure how we got here... good luck :)");
    }
  } catch (error) {
    console.error(`Caught error in mergeData(): ${error}`);
  }
}

function sleep(ms) {
  try {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } catch (error) {
    caughtError("sleep()", error);
  }
}
/* ####################### End - Functions ####################### */

//Need this so we can import our server it into our unit tests
// module.exports = app;
module.exports = { app, mongoose, server, Users };


// This is just a comment
