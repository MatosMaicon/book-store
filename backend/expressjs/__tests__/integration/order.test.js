const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Order", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to list orders when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123123"
    });

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
});