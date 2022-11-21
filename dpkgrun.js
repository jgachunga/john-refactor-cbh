const { deterministicPartitionKeyRefactored } = require("./dpkRefactored");
const partitionKey = 'partitionKeysdfsdfsdfsdfsasfsdsd sdgdgasdgsdgsdgsd gs agasdgsg gasgsgasgasdgsdg  s gsgasgas gsgsgsgsg sdgsgsgs gs sgsgasgasdg sgas partitionKeysdfsdfsdfsdfsasfsdsd sdgdgasdgsdgsdgsd gs agasdgsg gasgsgasgasdgsdg  s gsgasgas gsgsgsgsg sdgsgsgs gs sgsgasgasdg sgas'
console.log(partitionKey.length)
console.log(deterministicPartitionKeyRefactored({partitionKey}))