const crypto = require("crypto");

const MAX_PARTITION_KEY_LENGTH = 256;

function checkCandidateLengthWithMaxPartitionKeyLength(candidate){
    candidate = (typeof candidate !== "string") ? JSON.stringify(candidate) : candidate;
    candidate =  (candidate.length > MAX_PARTITION_KEY_LENGTH) ? hashCandidate(candidate) : candidate;
    return candidate
}

function hashCandidate(hashable) {
    return crypto.createHash("sha3-512").update(hashable).digest("hex")
}

exports.deterministicPartitionKeyRefactored = (event) => {
    let candidate;
    const TRIVIAL_PARTITION_KEY = "0";
    
    candidate = event?.partitionKey ? event?.partitionKey : event && hashCandidate(JSON.stringify(event));
    
    candidate = candidate ? checkCandidateLengthWithMaxPartitionKeyLength(candidate) : TRIVIAL_PARTITION_KEY
    return candidate;
};

