const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Order", () => {

  generateOrder = async (qtd) => {
    let user, order = null

    const product = await factory.create("Product");

    for(let i=0; i<qtd; i++){
      user = await factory.create("User");
      console.log(user.email) //email duplicado
  
      order = await factory.create("Order", {
        userId: user.id
      });
    }

    const token = await user.generateToken()

    return { order: order, user: user, token: token }
  }

  beforeEach(async () => {
    await truncate();
  });

  it("should be able to list orders when authenticated", async () => {
    user = await factory.create("User");
    const token = await user.generateToken()

    const response = await request(app)
      .get(`${process.env.APP_URI}/orders`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to list orders without jwt token", async () => {
    const response = await request(app).get(`${process.env.APP_URI}/orders`);

    expect(response.status).toBe(401);
  });

  it("should not be able to list orders with invalid jwt token", async () => {
    const response = await request(app)
      .get(`${process.env.APP_URI}/orders`)
      .set("Authorization", `Bearer 123123`);

    expect(response.status).toBe(401);
  });

  it("should be able to show order when authenticated", async () => {
    const generate = await generateOrder(1)

    const response = await request(app)
      .get(`${process.env.APP_URI}/orders/${generate.order.id}`)
      .set("Authorization", `Bearer ${generate.token}`);

    expect(response.status).toBe(200);

    expect([response.body])
      .toContainEqual(
        expect.objectContaining({ dateOrder: generate.order.dateOrder, total: expect.anything() })
      );
  });
});