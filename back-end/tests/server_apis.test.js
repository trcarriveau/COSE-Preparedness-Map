// const { application } = require('express');
const request = require('supertest')
const {app, mongoose, server, Users} = require('../server')


/* ================================ Setup Before Tests ================================ */
//Could do some setup here if needed before any test runs.
// beforeAll(async () => {
// })
/* ================================ Setup Before Tests ================================ */




/* ================================== Tear Down Tests ================================== */
//Lets do some tear down after all tests are run.
//Try to close open handles.
afterAll(async () => {
  //This lets us clean the test user out of the db so we don't have to do it manually. 
  await Users.findOneAndDelete({username: 'JohnDoe', email: 'johndoe@gmail.com'})
  //Close the db connection
  mongoose.connection.close()
  //Close down the express server
  server.close()

  //Trying to close down app since we still have an open handle. Jest can't detect it like it could with the others.
  //Meaning, even if we run "jest --detectOpenHandles", it can't find it. But it did find the others which we are closing above. 
  // app.destroy()
})
/* ================================== Tear Down Tests ================================== */




/* ======================================  Tests ====================================== */

/* ################# Registration API - Start ################# */
describe('POST - /registration', function() {

  it.only('Not a Good Email Address', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoegmail.com',
        password: '12345678',
        confirmPassword: '12345678',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errors[0].msg).toMatch('Invalid value');
        expect(res.body.errors[0].param).toMatch('email');
        expect(res.body.errors[0].location).toMatch('body');
        done();
      });
  });

  it.only('Not Minimum Password Length', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'Vikings',
        confirmPassword: 'Vikings',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errors[0].msg).toMatch('Invalid value');
        expect(res.body.errors[0].param).toMatch('password');
        expect(res.body.errors[0].location).toMatch('body');
        done();
      });
  });

  it.only('Non Matching Passwords', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'VikingsRock',
        confirmPassword: 'VikingsRock!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errors[0].msg).toMatch('Password confirmation does not match password');
        expect(res.body.errors[0].param).toMatch('confirmPassword');
        expect(res.body.errors[0].location).toMatch('body');
        done();
      });
  });

  it.only('Not Minimum Password Length AND Non Matching Passwords', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'Vikings',
        confirmPassword: 'Vikings!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errors[0].msg).toMatch('Invalid value');
        expect(res.body.errors[0].param).toMatch('password');
        expect(res.body.errors[0].location).toMatch('body');
        expect(res.body.errors[1].msg).toMatch('Password confirmation does not match password');
        expect(res.body.errors[1].param).toMatch('confirmPassword');
        expect(res.body.errors[1].location).toMatch('body');
        done();
      });
  });
  
  it.only('Good registration', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirmPassword: '!VikingsRock!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.message).toMatch('We created your account');
        done();
      });
  });

  it.only('Duplicate Registration - Both Username and Email', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirmPassword: '!VikingsRock!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('Username and Email already exist');
        done();
      });
  });

  it.only('Duplicate Registration - Just Username', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        email: 'johndoe1@gmail.com',
        password: '!VikingsRock!',
        confirmPassword: '!VikingsRock!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('Username already exists');
        done();
      });
  });

  it.only('Duplicate Registration - Just Email', function(done) {
    request(app)
      .post('/registration')
      .type('application/json')
      .send({
        username: 'JohnDoe1',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirmPassword: '!VikingsRock!',
        major: "Software Engineering"
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('Email already exist');
        done();
      });
  });
});
/* ################# Registration API - End ################# */


/* #################### Login API - Start #################### */
describe('POST - /login', function() {
  it.only('Non Existing User - Sign In With Username', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'JonnyDoe',
        password: '!VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('The username does not exist');
        done();
      });
  });

  it.only('Non Existing User - Sign In With Email', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'JonnyDoe@gmail.com',
        password: '!VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('The email does not exist');
        done();
      });
  });

  it.only('Existing User - Bad Password - Sign In With Username', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        password: 'VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('The password is invalid');
        done();
      });
  });

  it.only('Existing User - Bad Password - Sign In With Email', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'johndoe@gmail.com',
        password: 'VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.errorMessage).toMatch('The password is invalid');
        done();
      });
  });

  it.only('Existing User - Sign In With Username', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'JohnDoe',
        password: '!VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.message).toMatch('Successfulled logged in!');
        expect(res.body.username).toMatch('JohnDoe');
        expect(res.body.major).toMatch('Software Engineering');
        expect(res.body.map.map_name).toMatch('Software Engineering');
        done();
      });
  });

  it.only('Existing User - Sign In With Email', function(done) {
    request(app)
      .post('/login')
      .type('application/json')
      .send({
        username: 'johndoe@gmail.com',
        password: '!VikingsRock!'
      })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        console.log(res.body);
        expect(res.body.message).toMatch('Successfulled logged in!');
        expect(res.body.username).toMatch('JohnDoe');
        expect(res.body.major).toMatch('Software Engineering');
        expect(res.body.map.map_name).toMatch('Software Engineering');
        done();
      });
  });
});
/* #################### Login API - End #################### */

/* ======================================  Tests ====================================== */