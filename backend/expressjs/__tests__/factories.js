const faker = require("faker");
const random = require("./utils/random")
const { factory } = require("factory-girl");
const { User, Order, Product } = require("../src/app/models");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  userType: random(0,1) ? 'admin' : 'client',
  active: !random(0,1)
});

factory.define("Order", Order, {
  dateOrder: faker.date.recent(),
  userId: 1,
  status: 'pedding',
  total: 500,
  itens: [{bookId: 1, quantity: random(1,5)}]
  
});

factory.define("Product", Product, {
  name: faker.name.title(),
  description: faker.lorem.paragraph(),
  price: faker.random.number({min: 1, max:250, precision: 0.1}),
  image: faker.image.business()
});

module.exports = factory;