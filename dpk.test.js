const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });

  it("Handles case where event key is object", () => {
    const event = {partitionKey: {foo: 'bar'}};
    const result = deterministicPartitionKey(event);

    expect(result).toBe('{"foo":"bar"}');
  });

  it("Handles case where event key is number", () => {
    const event = {partitionKey: 30};
    const result = deterministicPartitionKey(event);

    expect(result).toBe("30");
  });

  it("Handles case where event key is boolean", () => {
    const event = { partitionKey: true };
    const result = deterministicPartitionKey(event);

    expect(result).toBe("true");
  });

  it("Handles case where event key is array", () => {
    const event = { partitionKey: ['foo', 'bar'] };
    const result = deterministicPartitionKey(event);

    expect(result).toBe('["foo","bar"]');
  });

  it("Handles case where event key is string", () => {
    const event = { partitionKey: 'foo' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("foo");
  });

  it("Handles case where event key is not present", () => {
    const event = { foo: 'bar' };
    const result = deterministicPartitionKey(event);

    expect(typeof result).toBe("string");
    expect(result.length).toBe(128);
  });

  it("Handles case where hash is too long", () => {
    const event = { result: Array(500).fill('a').join('') };
    const result = deterministicPartitionKey(event);

    expect(typeof result).toBe("string");
    expect(result.length).toBe(128);
  });

});
