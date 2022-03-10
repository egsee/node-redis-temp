const redis = require('ioredis')

const client = new redis()


client.set('test', 'test-value')
client.get('test', function(e, res){
    console.log(res)
})