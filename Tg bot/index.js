const TelegramBot = require('node-telegram-bot-api')
var Crone = require('cron').CronJob;
const token = '678474974:AAEkQ7I85LpakJ9BU8Dsq11n0OtNsYAWyjY'

const bot = new TelegramBot(token, {
    polling: true
});
let job = new Crone('0, 5, 10 * * * * * ', function() {
    console.log('Привет');
});

job.start();
bot.on('message', function(msg) {
    let id = msg.from.id;
    bot.sendMessage(id, msg.text);

})