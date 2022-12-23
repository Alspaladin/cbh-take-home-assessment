const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (!event.partitionKey) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }

  candidate = (typeof event.partitionKey === "string") ? event.partitionKey : JSON.stringify(event.partitionKey);

  if (candidate.length <= MAX_PARTITION_KEY_LENGTH) {
    return candidate;
  }

  return crypto.createHash("sha3-512").update(candidate).digest("hex");
};