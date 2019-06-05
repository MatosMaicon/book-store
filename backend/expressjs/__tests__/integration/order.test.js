const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");
const random = require("../utils/random")

describe("Order", () => {

  generateOrders = async (qtd) => {
    let user, order = null

    for (let i = 0; i < qtd; i++) {
      user = await factory.user();

      const rand = random(1, 5)
      for (let j = 0; j < rand; j++) {
        order = await factory.order({
          userId: user.id
        });
      }
    }

    const token = await user.generateToken()

    return { order: order, user: user, token: token }
  }

  beforeEach(async () => {
    //await truncate();
  });

  it("should be able to list orders when authenticated", async () => {
    const { user, order, token } = await generateOrders(3)

    const response = await request(app)
      .get(`${process.env.APP_URI}/orders`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    for (let body of response.body) {
      expect([body])
        .toContainEqual(
          expect.objectContaining({ userId: user.id })
        );
    }
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
    const { order, token } = await generateOrders(1)

    const response = await request(app)
      .get(`${process.env.APP_URI}/orders/${order.id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);

    expect([response.body])
      .toContainEqual(
        expect.objectContaining({ dateOrder: order.dateOrder, total: expect.anything() })
      );
  });
});