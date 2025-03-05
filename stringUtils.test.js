const capitalize = require("./stringUtils");

test('capitalizes first letter', () => {
    expect(capitalize("hello")).toBe("Hello");
});