const { deterministicPartitionKeyRefactored } = require("./dpkRefactored");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKeyRefactored();
    expect(trivialKey).toBe("0");
  });

  it("Returns a string when given an input", () => {
    const trivialKey = deterministicPartitionKeyRefactored({partitionKey : 'partitionKey'});
    expect(trivialKey).not.toBe("");
  });

  it("Returns same string when given an input less than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = 'partitionKey'
    const trivialKey = deterministicPartitionKeyRefactored({partitionKey });
    expect(trivialKey).toBe(partitionKey);
  });

  it("Returns changed string when given an input greater than MAX_PARTITION_KEY_LENGTH", () => {
    const partitionKey = 'partitionKeysdfsdfsdfsdfsasfsdsd sdgdgasdgsdgsdgsd gs agasdgsg gasgsgasgasdgsdg  s gsgasgas gsgsgsgsg sdgsgsgs gs sgsgasgasdg sgas partitionKeysdfsdfsdfsdfsasfsdsd sdgdgasdgsdgsdgsd gs agasdgsg gasgsgasgasdgsdg  s gsgasgas gsgsgsgsg sdgsgsgs gs sgsgasgasdg sgas'
    const trivialKey = deterministicPartitionKeyRefactored({partitionKey });
    expect(trivialKey).not.toBe(partitionKey);
  });

});
