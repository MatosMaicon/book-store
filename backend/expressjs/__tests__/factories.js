const faker = require("faker");
const random = require("./utils/random")
const { User, Order, Product } = require("../src/app/models");

class Factory {

  constructor (){
    this.order = this.order.bind(this)
  }

  async user (attributes) {
    let att_default = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      userType: random(0, 1) ? 'admin' : 'client',
      active: !random(0, 1)
    }

    return await User.create({ ...att_default, ...attributes })
  }

  async order (attributes) {
    const product = this.product()

    const att_default = {
      dateOrder: faker.date.recent(),
      userId: 1,
      status: 'pedding',
      total: 500,
      itens: [{ bookId: product.id, quantity: random(1, 5) }]
    }

    return await Order.create({ ...att_default, ...attributes })
  }

  async product (attributes) {
    let att_default = {
      name: faker.name.title(),
      description: faker.lorem.paragraph(),
      price: faker.random.number({ min: 1, max: 250, precision: 0.1 }),
      image: faker.image.business()
    }

    return await Product.create({ ...att_default, ...attributes })
  }
}

module.exports = new Factory();