const faker = require("faker");
const random = require("./utils/random")
const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  userType: random(0,1) ? 'admin' : 'client',
  active: !random(0,1)
});

module.exports = factory;