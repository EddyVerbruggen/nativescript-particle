const Particle = require("nativescript-particle").Particle;
const particle = new Particle();

describe("login function", () => {
  it("exists", () => {
    expect(particle.login).toBeDefined();
  });
});

describe("logout function", () => {
  it("exists", () => {
    expect(particle.logout).toBeDefined();
  });
});

describe("listDevices function", () => {
  it("exists", () => {
    expect(particle.listDevices).toBeDefined();
  });
});
