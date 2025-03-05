const fetchData = require("./fetchData");

test('fetches data correctly', async () => {
    const data = await fetchData();
    expect(data).toBe("Hello!");
});