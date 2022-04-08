const redis = require('ioredis')

const client = new redis()


client.set('test1', 'test-value')
client.get('test1', function(e, res){
    console.log(res)
})
