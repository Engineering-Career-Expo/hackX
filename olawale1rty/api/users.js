const config = require("config");
const express = require("express"); 
const ObjectId = require('mongodb').ObjectID;
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authorize = require('../auto/authorize');
const Role = require('../auto/role');
const { Dashboard, validateDashboard } = require("../model/dashboard");
const { Submission, validateSubmission } = require("../model/submission");
const { User, validate } = require("../model/user");
const { contact, validateContact } = require("../model/contact");
const {Picture, Media}    = require('../auto/upload');

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {

    if (req.session.user && req.cookies.user_sid) {
        res.json("Session Redirection To Dashboard")
        // res.redirect('https://hackx.netlify.app/dashboard');
    } else {
        next();
    }     
};

//routes

router.post("/signup", sessionChecker, (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.json(error.details[0].message);
  // if (error) return res.status(400).send(error.details[0].message);
  let role_pass = (role) => {
    if (role == undefined) {
      return Role.User
    }else {
      return Role.Admin
    }
  };
  const {
    firstname,
    lastname,
    email,
    password,
    username,
    role,
  } = req.body;
  let inputData = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    username: username,
    role: role_pass(role),
  });
  inputData
    .save()
    .then((doc) => {
      // console.log(doc);
      req.session.user = Object.values(doc);
      res.json("Successfully Signed Up");
      
      // res.redirect('https://hackx.netlify.app/dashboard');
    })
    .catch((err) => {
      // console.log(err);
      res.json("Failed to signup");
    });
});

router.post("/contact", (req, res) => {
  const { error } = validateContact(req.body);
  if (error) return res.json(error.details[0].message);
  // if (error) return res.status(400).send(error.details[0].message);

  const { email, name, message } = req.body;
  contacts = new contact({
    email: email,
    name: name,
    message: message,
  });
  contacts
    .save()
    .then((doc) => {
      //console.log(doc);
      res.json("Successfully Saved Contact");
    })
    .catch((err) => {
      // console.log(err);
      res.json("Failed to Save Contact");
    });
});


router.post("/login", sessionChecker, (req, res) => {
  const { email, password } = req.body;
  User.find({
    email: email,
  })
    .then((doc) => {
      let index = doc[0];
      bcrypt.compare(password, index.password).then((result) => {
        if (index.email == email && result) {
          let token_pass = jwt.sign(
            { sub: index._id, role: index.role },
            config.get("secret"),
            { expiresIn: "24h" }
          );
          
          req.session.user = Object.values(index);
          // console.log(req.session.user)
          // res.header("x-auth-token", token_pass);
          res.json({
            message: "Authentication Successful",
            token: token_pass,
            id: index._id
          });
          // res.redirect('https://hackx.netlify.app/dashboard');
          
          
        } else if ( result === false) {
          res.json("Password Incorrect.");
        }else {
          res.json("Login Incorrect");
        }
      });
    })
    .catch((err) => {
      res.json("Wrong email entered.");
    });
});

router.get("/dashboard/:id", authorize(),  (req, res) => {
  
  if (req.session.user && req.cookies.user_sid) {
    Picture(req, res,(error) => {
      // if (req.files.length <= 0) {
      //           return res.json("You must select at least 1 file.");
      //         }
      if (error === "LIMIT_UNEXPECTED_FILE") {
            return res.json("Too many files to upload.");
            }
      if (error) return res.json(`Error when trying upload files: ${error}`);

          let OUTPUT = () => {
          // console.log(req.body)
          const { error } = validateDashboard(req.body);
          if (error) return res.json(error.details[0].message);

          
            const {
              bio,
              track,
              age,
              institution,
              department,
            } = req.body;
            let VIDEO = [];
            if (req.files["media"] === undefined){
              VIDEO = req.files["media"]
            }else {
              req.files["media"].forEach((image)=>{
                VIDEO.push(image.filename);

              });
            }

            let PICTURE = [];
            if (req.files["picture"] === undefined){
              PICTURE = req.files["picture"]
            }else {
              req.files["picture"].forEach((image)=>{
                PICTURE.push(image.filename);

              });
            }

            let media =  VIDEO; 
            let picture =  PICTURE;
            // console.log(media)
            // console.log(picture)
            let inputData = new Dashboard({
              bio: bio,
              track: track,
              age: age,
              institution: institution,
              department: department,
              media: media,
              picture: picture
            });
            inputData
              .save()
              .then((doc) => {
            
                  return User.findOneAndUpdate(
                        {
                          _id:  new ObjectId(req.params.id),
                        },
                        {
                          $push: {dashboard: doc._id}
                        },
                        { new: true }
                      )
                        .then((doc) => {
                          // console.log(doc);
                          res.json("Files have been uploaded.");
                          // res.json("Redirect back to Dashboard");
                          // res.redirect('https://hackx.netlify.app/dashboard');
                        })
                        .catch((err) => {
                          // console.log(err)
                          res.json("Dashboard Submission Failed");
                        });
              })
        };

      if(req.files == undefined){
          OUTPUT()
      }else(
        OUTPUT()
      );
      
        

    }); 
        
          
    } else {
        res.json("Redirect To login");
        // res.redirect('https://hackx.netlify.app/pages/login');
    }
});

router.get("/submission/:id", authorize(), (req, res) => {
  Picture(req, res,(error) => {
      
      if (error === "LIMIT_UNEXPECTED_FILE") {
            return res.json("Too many files to upload.");
            }
      if (error) return res.json(`Error when trying upload many files: ${error}`);

          let OUTPUT = () => {
            const { error } = validateSubmission(req.body);
            if (error) return res.json(error.details[0].message);
            // if (error) return res.status(400).send(error.details[0].message);
            
            const {
              name,
              tagline,
              problem,
              challenges,
              technologies,
              links
            } = req.body;
            let VIDEO = [];
            if (req.files["media"] === undefined){
              VIDEO = req.files["media"]
            }else {
              req.files["media"].forEach((image)=>{
                VIDEO.push(image.filename);

              });
            }

            let PICTURE = [];
            if (req.files["picture"] === undefined){
              PICTURE = req.files["picture"]
            }else {
              req.files["picture"].forEach((image)=>{
                PICTURE.push(image.filename);

              });
            }
            
            let video =  VIDEO; 
            let pictures =  PICTURE;
            let inputData = new Submission({
              name: name,
              tagline: tagline,
              problem: problem,
              challenges: challenges,
              technologies: technologies,
              links: links,
              video: video,
              pictures: pictures
            });
            inputData
              .save()
              .then((doc) => {
                  
                  return User.findOneAndUpdate(
                        {
                          _id:  new ObjectId(req.params.id),
                        },
                        {
                          $push: {submission: doc._id}
                        },
                        { new: true }
                      )
                        .then((doc) => {
                          // console.log(doc);
                          res.json("Files have been uploaded.");
                          // res.redirect('https://hackx.netlify.app/dashboard');
                        })
                        .catch((err) => {
                          res.json("Submission Failed");
                        });
              })

        };

      if(req.files == undefined){
          OUTPUT()
      }else(
        OUTPUT()
      );
      
        

    }); 
});

router.get("/logout", (req, res) => {
  
  if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.json("Redirect To Homepage");
        // res.redirect('https://hackx.netlify.app');
    } else {
        res.json("Redirect To login");
        // res.redirect('https://hackx.netlify.app/pages/login');
    }
});

router.get("/getuser", authorize(), (req, res) => {  
  const { username } = req.body;
  User.find({
    username: username,
  })
    .populate("dashboard")
    .populate("submission")
    .then((doc) => {
      let index = doc[0];
      //console.log(doc);
      let firstname = index.firstname;
      let lastname = index.lastname;
      let email = index.email;
      let username = index.username;
      let dashboard = index.dashboard;
      let submission = index.submission;
      res.json({
        firstname,
        lastname,
        email,
        username,
        dashboard,
        submission
      });
    })
    .catch((err) => {
      console.log(err)
      res.json("Incorrect username");
    });
});

//delete path details
router.delete("/deleteuser", authorize(Role.Admin), (req, res) => {
  const { username } = req.body;
  // console.log(req.body)
  User.findOneAndRemove({
    username: username,
  })
    .then((doc) => {
      //console.log(doc);
      res.json(username + " has been deleted.");
    })
    .catch((err) => {
      res.json("Unable to delete " + username);
      //console.log(err)
    });
});

router.delete("/deleteContact", authorize(Role.Admin), (req, res) => {
  const { email } = req.body;
  contact
    .findOneAndRemove({
      email: email,
    })
    .then((doc) => {
      //console.log(doc);
      res.json(email + " has been deleted.");
    })
    .catch((err) => {
      res.json("Unable to delete contact");
      //console.log(err)
    });
});
// update path details
router.put("/updateUsername", authorize(), (req, res) => {
  const { email, username } = req.body;
    User.findOneAndUpdate(
      {
        email: email,
      },
      {
        username: username,
      },
      { new: true }
    )
      .then((doc) => {
        //console.log(doc);
        let user = doc.username;
        res.json(user + " has been updated Successfully.");
      })
      .catch((err) => {
        res.json("Unable to update Username");
      });
});

router.get("/forgotPassword", (req, res) => {
  const { email, username } = req.body;   
  User.find(
    {
      email: email,
    })
    .then((doc) => {
      let index = doc[0]
      if (index.username == username){
        res.json("Forgot password redirect.");
      };
    })
    .catch((err) => {
      res.json("Unable to redirect forget password");
    });

});

router.put("/updatePassword", (req, res) => {
  const { email, password } = req.body;   
  User.findOneAndUpdate(
    {
      email: email,
    },
    {
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    },
    { new: true }
  )
    .then((doc) => {
      //console.log(doc);
      res.json("Password has been updated Successfully.");
    })
    .catch((err) => {
      res.json("Unable to update Password");
    });

});

// all users path details
router.get("/alluser", authorize(Role.Admin), (req, res) => {
  User.find()
    .populate("dashboard")
    .populate("submission")
    .then((doc) => {
      //console.log(doc);
      res.json({
        doc,
      });
    })
    .catch((err) => {
      res.json("Error in getting users");
      // console.log(err);
    });
});

router.get("/getContacts", authorize(Role.Admin), (req, res) => {
  const { email } = req.body;
  contact
    .find({
      email: { $eq: email.toString() },
    })
    .sort([["updatedAt", -1]])
    .then((doc) => {
      // let index = doc[0];
      //console.log(doc);
      res.json({
        doc,
      });
    })
    .catch((err) => {
      // console.log(err)
      res.json("Unable to get contact");
    });
});

//transactions
router.get("/getAllContacts/", authorize(Role.Admin), (req, res) => {
  contact
    .find()
    .then((doc) => {
      //console.log(doc);
      res.json({
        doc,
      });
    })
    .catch((err) => {
      res.json("Unable to get contacts");
      // console.log(err);
    });
});

module.exports = router;
