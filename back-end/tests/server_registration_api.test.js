// const { application } = require('express');
const request = require('supertest')
const {app, mongoose, server} = require('../server')


beforeAll(done => {
  done()
})

afterAll(done => {
  mongoose.connection.close()
  server.close()
  // app.destroy()
  done()
})

//This is from this article: https://dev.to/mhmdlotfy96/testing-nodejs-express-api-with-jest-and-supertest-1bk0
// Lets send a good registration attempt

describe('POST - /registration', function() {
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
  it.only('Duplicate Registration', function(done) {
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
});








// test("POST /registration - Good Registration", async () => {
//   await request(app)
// 	.post("/registration")
// 	.set('Accept', /json/)
// 	.type('form')
//     .send({
//       username: 'JohnDoe',
//       email: 'johndoe@gmail.com',
//       password: '!VikingsRock!',
//       passwordConfirmation: '!VikingsRock!'
//     })
    
//     .expect(200)
//     .then((response) => {
//       expect(response.body.msg).toMatch('We created your account');
//     })
// });




// describe('GET /registration', function() {
//   it('responds with json', function(done) {
//     request(app)
//       .get('/registration')
//       .expect(200, done);
//   });
// });



// test("GET /registration - Good Registration", async () => {
//   request(app).get("/registration")
//     .expect(200)
// 		.then((response) => {
// 			  expect(response.body).toMatch('Hi');
// 			});
// });



//Doesnt work ---------------




// describe('POST /registration', function() {
//   // Lets send a good registration attempt
//   it('Good Registration', async done => {

//     request(server)
//       .post('/registration')
//       .send({
//         username: 'JohnDoe',
//         email: 'johndoe@gmail.com',
//         password: '!VikingsRock!',
//         passwordConfirmation: '!VikingsRock!'
//       })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         return done();
//       })
//   })
// })








//This is what I have done at work -- Start (I believe we used mocha syntax, supertest might have that in the background?)
// describe('Account API Testing', function() {
// 	// For functionally testing the acctList endpoint
// 	it('Gets the acctList endpoint', async done => {
// 		// Sends GET Request to /test endpoint
// 		const response = await request.post('/acctList')
// 		.send({
// 					acname: "*"
// 				})
// 		expect(response.status).toBe(200)
// 		// ...
// 		done()
// 	})
// })
//This is what I have done at work -- End
