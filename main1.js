var redis = require('redis');
var client = redis.createClient("6379", "127.0.0.1");


client.on("error", function (err) {
    console.log("redis client连接失败", err);
});
client.on('ready', function (res) {
    console.log('client ready');
});


client.on('connect', function () {
    console.log('connect')
    client.set("test", 'test-value')
    console.log(client.get('test'))

})