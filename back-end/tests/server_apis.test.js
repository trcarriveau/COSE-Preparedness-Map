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

let test_suite = [
  {
    suite_name: 'POST - /registration',
    test_cases: [
      {
        test_title: 'Not a Good Email Address',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoegmail.com',
        password: '12345678',
        confirm_password: '12345678',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'msg',
            expect_value: 'Invalid value'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'param',
            expect_value: 'email'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'location',
            expect_value: 'body'
          }
        ]
      },
      {
        test_title: 'Not Minimum Password Length',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'Vikings',
        confirm_password: 'Vikings',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'msg',
            expect_value: 'Invalid value'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'param',
            expect_value: 'password'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'location',
            expect_value: 'body'
          }
        ]
      },
      {
        test_title: 'Non Matching Passwords',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'VikingsRock',
        confirm_password: 'VikingsRock!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'msg',
            expect_value: 'Password confirmation does not match password'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'param',
            expect_value: 'confirmPassword'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'location',
            expect_value: 'body'
          }
        ]
      },
      {
        test_title: 'Not Minimum Password Length AND Non Matching Passwords',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'Vikings',
        confirm_password: 'Vikings!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'msg',
            expect_value: 'Invalid value'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'param',
            expect_value: 'password'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 0,
            expect_path_key: 'location',
            expect_value: 'body'
          },{
            expect_path_name: 'errors',
            expect_path_index: 1,
            expect_path_key: 'msg',
            expect_value: 'Password confirmation does not match password'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 1,
            expect_path_key: 'param',
            expect_value: 'confirmPassword'
          },
          {
            expect_path_name: 'errors',
            expect_path_index: 1,
            expect_path_key: 'location',
            expect_value: 'body'
          }
        ]
      },
      {
        test_title: 'Good registration',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirm_password: '!VikingsRock!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 200,
        response_body: [
          {
            expect_path_key: 'message',
            expect_value: 'We created your account'
          }
        ]
      },
      {
        test_title: 'Duplicate Registration - Both Username and Email',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirm_password: '!VikingsRock!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'Username and Email already exist'
          }
        ]
      },
      {
        test_title: 'Duplicate Registration - Just Username',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe',
        email: 'johndoe1@gmail.com',
        password: '!VikingsRock!',
        confirm_password: '!VikingsRock!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'Username already exists'
          }
        ]
      },
      {
        test_title: 'Duplicate Registration - Just Email',
        endpoint: '/registration',
        send_type: 'application/json',
        username: 'JohnDoe1',
        email: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        confirm_password: '!VikingsRock!',
        major: 'Software Engineering',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'Email already exist'
          }
        ]
      }
    ]
  },
  {
    suite_name: 'POST - /login',
    test_cases: [
      {
        test_title: 'Non Existing User - Sign In With Username',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'JonnyDoe',
        password: '!VikingsRock!',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'The username does not exist'
          }
        ]
      },
      {
        test_title: 'Non Existing User - Sign In With Email',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'JonnyDoe@gmail.com',
        password: '!VikingsRock!',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'The email does not exist'
          }
        ]
      },
      {
        test_title: 'Existing User - Bad Password - Sign In With Username',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'JohnDoe',
        password: 'VikingsRock!',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'The password is invalid'
          }
        ]
      },
      {
        test_title: 'Existing User - Bad Password - Sign In With Email',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'johndoe@gmail.com',
        password: 'VikingsRock!',
        response_type: 'application/json',
        response_status: 400,
        response_body: [
          {
            expect_path_key: 'errorMessage',
            expect_value: 'The password is invalid'
          }
        ]
      },
      {
        test_title: 'Existing User - Sign In With Username',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'JohnDoe',
        password: '!VikingsRock!',
        response_type: 'application/json',
        response_status: 200,
        response_body: [
          {
            expect_path_key: 'message',
            expect_value: 'Successfulled logged in!'
          },
          {
            expect_path_key: 'username',
            expect_value: 'JohnDoe'
          },
          {
            expect_path_key: 'major',
            expect_value: 'Software Engineering'
          },
          {
            expect_path_name: 'map',
            expect_path_key: 'map_name',
            expect_value: 'Software Engineering'
          }
        ]
      },
      {
        test_title: 'Existing User - Sign In With Email',
        endpoint: '/login',
        send_type: 'application/json',
        username: 'johndoe@gmail.com',
        password: '!VikingsRock!',
        response_type: 'application/json',
        response_status: 200,
        response_body: [
          {
            expect_path_key: 'message',
            expect_value: 'Successfulled logged in!'
          },
          {
            expect_path_key: 'username',
            expect_value: 'JohnDoe'
          },
          {
            expect_path_key: 'major',
            expect_value: 'Software Engineering'
          },
          {
            expect_path_name: 'map',
            expect_path_key: 'map_name',
            expect_value: 'Software Engineering'
          }
        ]
      }
    ]
  }
]

for (const suite of test_suite) [
  describe(suite.suite_name, function() {
    for (const test of suite.test_cases) {
      it.only(test.test_title, function(done) {
        request(app)
          .post(test.endpoint)
          .type(test.send_type)
          .send({
            username: test.username,
            email: test.email,
            password: test.password,
            confirmPassword: test.confirm_password,
            major: test.major
          })
          .set('Accept', test.response_type)
          .expect(test.response_status)
          .end(function (err, res) {
            if (err) throw err;
            console.log(res.body)
            for (const response of test.response_body ) {
              if (response.hasOwnProperty('expect_path_name') && response.hasOwnProperty('expect_path_index') && response.hasOwnProperty('expect_path_key')) {
                expect(res.body[response.expect_path_name][response.expect_path_index][response.expect_path_key]).toMatch(response.expect_value);
              } else if (response.hasOwnProperty('expect_path_name') && response.hasOwnProperty('expect_path_key')) {
                expect(res.body[response.expect_path_name][response.expect_path_key]).toMatch(response.expect_value);
              } else {
                expect(res.body[response.expect_path_key]).toMatch(response.expect_value);
              }
            }
            done();
          });
      });
    }
  })
]